import * as z from 'zod';
import { useReducer, useState } from 'react';
import './App.css'
import type { CCGraph, CCGraphItem } from './CCGraph.tsx';
import CCGraphListview from './CCGraphListview.tsx'
import CCGraphEditor from './CCGraphEditor.tsx'
import { arrayMoveImmutable } from 'array-move';
import { TvgToSvg } from './tiny-vector-graphics/TvgToSvg.tsx';
import { TvgElementSchema, type TvgElement } from './tiny-vector-graphics/TvgType.ts';
import logo from './assets/logo.svg';
import SvgFitContent from './scripts/SvgFitContent.tsx';
import 'material-icons/iconfont/material-icons.css';
/*
import JSONCrush from 'jsoncrush';
*/

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

function saveGraphAsFile(graph: CCGraph, filename: string) {
  const text = JSON.stringify(graph);
  const blob = new Blob([text], { type: 'text/plain' });
  const fileUrl = URL.createObjectURL(blob);
  const element = document.createElement('a');
  element.setAttribute('href', fileUrl);
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
  URL.revokeObjectURL(fileUrl);
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
          activeUuid: action.payload,
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
  let tvg: TvgElement[] = [];
  if ('CCGraphRendererTvg' in window && typeof window.CCGraphRendererTvg == 'function') {
    const parsed = z.array(TvgElementSchema).safeParse(window.CCGraphRendererTvg(ccgraph));
    if (parsed.success) {
      tvg = parsed.data;
    }
  }

  return (
    <SvgFitContent padding={2}>
      <TvgToSvg tvg={tvg} />
    </SvgFitContent>
  )
}

export default function App() {
  const [state, dispatch] = useReducer(AppStateReducer, { ccgraph: loadCCGraph(), activeUuid: '' });
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
      <section className={sidebarOpen ? 'sidebar-pane' : 'sidebar-pane closed'}>
        <header className='sidebar-item'>
          <img src={logo} alt='clicplot' />
          <h1>CliCPlot</h1>
        </header>
        <button className='sidebar-item'>
          <span className='material-icons-outlined sidebar-icon'>folder</span>
          <span className='sidebar-text'>File</span>
        </button>
        <button className='sidebar-item'>
          <span className='material-icons-outlined sidebar-icon'>grid_on</span>
          <span className='sidebar-text'>Data</span>
        </button>
        <button className='sidebar-item'>
          <span className='material-icons-outlined sidebar-icon'>query_stats</span>
          <span className='sidebar-text'>Plot</span>
        </button>
        <button className='sidebar-item'>
          <span className='material-icons-outlined sidebar-icon'>file_download</span>
          <span className='sidebar-text'>Export</span>
        </button>
        <button className='sidebar-item'>
          <span className='material-icons-outlined sidebar-icon'>extension</span>
          <span className='sidebar-text'>Extension</span>
        </button>
        <button className='sidebar-item sidebar-settings'>
          <span className='material-icons-outlined sidebar-icon'>settings</span>
          <span className='sidebar-text'>Settings</span>
        </button>
      </section>
      <section className='list-pane'>
        <header>
          <button
            className='toggle-sidebar-btn'
            onClick={() => { setSidebarOpen(!sidebarOpen) }}>
            {sidebarOpen && (<span className='material-icons'>menu_open</span>)}
            {!sidebarOpen && (<span className='material-icons'>keyboard_arrow_right</span>)}
          </button>
          <input type='text' id='project-title-edit' />
        </header>
        <div className='line'></div>
        <menu>
          <button onClick={addGraph}>add</button>
          <button onClick={
            () => { saveGraphAsFile(state.ccgraph, 'graph.json') }
          }>save</button>
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