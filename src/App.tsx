import { useReducer } from 'react';
import './App.css'
import type { CCGraph, CCGraphItem } from './CCGraph.tsx';
import CCGraphListview from './CCGraphListview.tsx'
import CCGraphEditor from './CCGraphEditor.tsx'
import { arrayMoveImmutable } from 'array-move';

interface AppState {
  ccgraph: CCGraph;
  activeUuid: string;
}

const initialState: AppState = {
  ccgraph: { uuidList: [], width: 300, ccgraphItems: {} },
  activeUuid: ""
};

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
          activeUuid: (state.activeUuid === action.payload ? "" : state.activeUuid),
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

export default function App() {
  const [state, dispatch] = useReducer(AppStateReducer, initialState);

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

  let svgPreview = '';
  if ('CCGraphRenderer' in window && typeof window.CCGraphRenderer == 'function') {
    svgPreview = window.CCGraphRenderer(state.ccgraph);
  }

  return (
    <>
      <section className='list-pane'>
        <header>
          <h1>CCEditor</h1>
          <p>OSS clinical cource editor</p>
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
        <div dangerouslySetInnerHTML={{__html: svgPreview}}></div>
      </section>
    </>
  )
};
