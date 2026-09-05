import * as z from "zod";
import { useLayoutEffect, useReducer, useRef, useState } from 'react';
import './App.css'
import type { CCGraph, CCGraphItem } from './CCGraph.tsx';
import CCGraphListview from './CCGraphListview.tsx'
import CCGraphEditor from './CCGraphEditor.tsx'
import { arrayMoveImmutable } from 'array-move';
import { TvgToSvg } from './tiny-vector-graphics/TvgToSvg.tsx';
import { TvgElementSchema, type TvgElement } from "./tiny-vector-graphics/TvgType.ts";

interface AppState {
  ccgraph: CCGraph;
  activeUuid: string;
}

/*
const initialState: AppState = {
  ccgraph: { uuidList: [], width: 300, ccgraphItems: {} },
  activeUuid: ''
};
*/

function loadCCGraph() {
  try {
    const item = window.localStorage.getItem('ccedit-appstate');
    return item ? (JSON.parse(item) as CCGraph) : { uuidList: [], width: 300, ccgraphItems: {} };
  }
  catch (error) {
    return { uuidList: [], width: 300, ccgraphItems: {} };
  }
}

type AppStateAction =
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'SELECT_ITEM'; payload: string }
  | { type: 'LIST_MOVE_ITEM'; payload: { oldIndex: number; newIndex: number } }
  | { type: 'DELETE_DATA'; payload: string }
  | { type: 'SET_ITEM'; payload: { uuid: string, ccgraphItem: CCGraphItem } };

function AppStateReducer(state: AppState, action: AppStateAction) {
  switch (action.type) {
    case 'ADD_ITEM':
      {
        const newCCGraphItems = {
          ...state.ccgraph.ccgraphItems,
        };
        newCCGraphItems[action.payload] = {
          name: 'Untitled Graph',
          type: '',
          height: 30,
          data: ''
        };
        return {
          ...state,
          ccgraph: {
            ...state.ccgraph,
            uuidList: [...state.ccgraph.uuidList, action.payload],
            ccgraphItems: newCCGraphItems
          }
        }
      }
    case 'SELECT_ITEM':
      return {
        ...state,
        activeUuid: action.payload
      };
    case 'LIST_MOVE_ITEM':
      return {
        ...state,
        ccgraph: {
          ...state.ccgraph,
          uuidList: arrayMoveImmutable(state.ccgraph.uuidList, action.payload.oldIndex, action.payload.newIndex)
        }
      };
    case 'DELETE_DATA':
      {
        const newCCGraphItems = {
          ...state.ccgraph.ccgraphItems,
        };
        delete newCCGraphItems[action.payload];
        return {
          ...state,
          activeUuid: (state.activeUuid === action.payload ? '' : state.activeUuid),
          ccgraph: {
            ...state.ccgraph,
            uuidList: state.ccgraph.uuidList.filter(item => item !== action.payload),
            ccgraphItems: newCCGraphItems
          }
        };
      }
    case 'SET_ITEM':
      {
        const newCCGraphItems = {
          ...state.ccgraph.ccgraphItems,
        };
        newCCGraphItems[action.payload.uuid] = action.payload.ccgraphItem;
        return {
          ...state,
          ccgraph: {
            ...state.ccgraph,
            ccgraphItems: newCCGraphItems
          }
        }
      }
    default:
      return state;
  }
}

function RenderSVG({ ccgraph }: { ccgraph: CCGraph }) {
  const ref = useRef<SVGGElement>(null);
  const [viewBox, setViewBox] = useState("0 0 0 0");

  useLayoutEffect(() => {
    if (ref.current) {
      try {
        const bbox = ref.current.getBBox();
        if (bbox.width > 0 && bbox.height > 0) {
          setViewBox(`${bbox.x - 2} ${bbox.y - 2} ${bbox.width + 4} ${bbox.height + 4}`);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, [ccgraph]);

  let tvg: TvgElement[] = [];
  if ('CCGraphRendererTvg' in window && typeof window.CCGraphRendererTvg == 'function') {
    const parsed = z.array(TvgElementSchema).safeParse(window.CCGraphRendererTvg(ccgraph));
    if (parsed.success) {
      tvg = parsed.data;
    }
  }

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox={viewBox}>
      <g ref={ref}>
        <TvgToSvg tvg={tvg} />
      </g>
    </svg>
  )
}

export default function App() {
  const [state, dispatch] = useReducer(AppStateReducer, { ccgraph: loadCCGraph(), activeUuid: '' });

  window.addEventListener('beforeunload', () => {
    window.localStorage.setItem('ccedit-appstate', JSON.stringify(state.ccgraph));
  });

  function addGraph() {
    dispatch({
      type: 'ADD_ITEM',
      payload: crypto.randomUUID()
    });
  }

  const ccgraphListProp = state.ccgraph.uuidList.map(uuid => ({
    uuid,
    name: state.ccgraph.ccgraphItems[uuid].name
  }));

  return (
    <>
      <section className='list-pane'>
        <header>
          <h1>CliCPlot</h1>
          <h2>clinical cource editor</h2>
        </header>
        <div className='line'></div>
        <menu>
          <button onClick={addGraph}>add</button>
          <button>save</button>
          <button>load</button>
        </menu>
        <CCGraphListview items={ccgraphListProp} activeUuid={state.activeUuid} dispatch={dispatch} />
      </section>
      <section className='editor-pane'>
        {state.activeUuid.length > 0 && (
          <CCGraphEditor
            uuid={state.activeUuid}
            ccgraphItem={state.ccgraph.ccgraphItems[state.activeUuid]}
            dispatch={dispatch} />
        )}
      </section>
      <section className='preview-pane'>
        <RenderSVG ccgraph={state.ccgraph}></RenderSVG>
      </section>
    </>
  )
};

/*
        <div dangerouslySetInnerHTML={{ __html: svgPreview }}></div>
*/