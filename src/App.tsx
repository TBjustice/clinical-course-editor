import { useEffect, useState } from 'react';
import './App.css'
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

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('data');
  const setTableList = useProjectDataStore((state) => state.setTableList);
  const setLayerUuid = useProjectDataStore((state) => state.setLayerUuid);
  const setLayerList = useProjectDataStore((state) => state.setLayerList);

  useEffect(() => {
    setTableList(SAMPLE1.tableList);
    const newLayerUuid: string[] = [];
    const newLayerList: Record<string, CliCLayer> = {};
    for (const layer of SAMPLE1.layerList) {
      const uuid = crypto.randomUUID();
      newLayerUuid.push(uuid);
      newLayerList[uuid] = layer;
    }
    setLayerUuid(newLayerUuid);
    setLayerList(newLayerList);
  }, []);

  window.addEventListener('beforeunload', () => {
    /*
    window.localStorage.setItem('ccedit-appstate', JSON.stringify(appState.ccgraph));
    */
  });

  return (
    <>
      <SidebarOpenContext
        value={{ value: sidebarOpen, setValue: setSidebarOpen }}>
        <SidebarSection activeTab={activeTab} setActiveTab={setActiveTab} />
        <MainSection activeTab={activeTab} />
      </SidebarOpenContext>
    </>
  )
};
