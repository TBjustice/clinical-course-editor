import { useEffect, useReducer, useState } from 'react';
import './App.css'
import type { CCGraph, CCGraphItem } from './types/CCGraph.ts';
import { arrayMoveImmutable } from 'array-move';
import 'material-icons/iconfont/material-icons.css';
import SidebarSection from './components/SidebarSection.tsx';
import MainSection from './components/MainSection.tsx';
import { SidebarOpenContext } from './contexts/AppContexts.ts';
import * as SAMPLE1 from './samples/sample1.json'
import type { CliCLayer } from './types/CliCTypes.ts';
import { useProjectDataStore } from './stores/ProjectDataStore.ts';
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

export default function App() {
  const [state, dispatch] = useReducer(AppStateReducer, { ccgraph: loadCCGraph(), activeUuid: '' });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('data');
  const setTableList = useProjectDataStore((state) => state.setTableList);
  const setLayerUuid = useProjectDataStore((state) => state.setLayerUuid);
  const setLayerList = useProjectDataStore((state) => state.setLayerList);

  useEffect(() => {
    setTableList(SAMPLE1.dataList);
    const newLayerUuid: string[] = [];
    const newLayerList: Record<string, CliCLayer> = {};
    for (const layer of SAMPLE1.figure.layerList) {
      const uuid = crypto.randomUUID();
      newLayerUuid.push(uuid);
      newLayerList[uuid] = layer;
    }
    setLayerUuid(newLayerUuid);
    setLayerList(newLayerList);
  }, []);

  window.addEventListener('beforeunload', () => {
    window.localStorage.setItem('ccedit-appstate', JSON.stringify(state.ccgraph));
  });

  return (
    <>
      <SidebarOpenContext
        value={{ value: sidebarOpen, setValue: setSidebarOpen }}>
        <SidebarSection activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainSection activeTab={activeTab} activeUuid={state.activeUuid} ccgraph={state.ccgraph} dispatch={dispatch} />
      </SidebarOpenContext>
    </>
  )
};
