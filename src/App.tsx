import { useEffect, useState } from 'react';
import './App.css'
import type { CCGraph } from './types/CCGraph.ts';
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

export default function App() {
  const [appState, _setAppState] = useState<AppState>({ ccgraph: loadCCGraph(), activeUuid: '' });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('data');
  const setTableList = useProjectDataStore((state) => state.setTableList);
  const setLayerUuid = useProjectDataStore((state) => state.setLayerUuid);
  const setLayerList = useProjectDataStore((state) => state.setLayerList);

  useEffect(() => {
    setTableList(SAMPLE1.tableList);
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
    window.localStorage.setItem('ccedit-appstate', JSON.stringify(appState.ccgraph));
  });

  return (
    <>
      <SidebarOpenContext
        value={{ value: sidebarOpen, setValue: setSidebarOpen }}>
        <SidebarSection activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainSection activeTab={activeTab} ccgraph={appState.ccgraph} />
      </SidebarOpenContext>
    </>
  )
};
