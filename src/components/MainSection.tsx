import type { CCGraph } from '../types/CCGraph';
import { DataTab } from './main-section-tab/DataTab';
import styles from './MainSection.module.css'
import { PlotTab } from './main-section-tab/PlotTab';
import { useState } from 'react';
import { type CliCTable } from '../types/CliCTypes';
import { ProjectDataContext } from '../contexts/ProjectContexts';
import * as SAMPLE1 from '../samples/sample1.json'

export default function MainSection({ activeTab, ccgraph, activeUuid, dispatch }: {
  activeTab: string,
  ccgraph: CCGraph,
  activeUuid: string,
  dispatch: CallableFunction
}) {
  const [dataList, setDataList] = useState<CliCTable[]>(SAMPLE1.dataList);
  return (
    <ProjectDataContext value={{ value: dataList, setValue: setDataList }}>
      <section className={styles.main}>
        {(activeTab == 'data') && <DataTab />}
        {(activeTab == 'plot') && <PlotTab ccgraph={ccgraph} activeUuid={activeUuid} dispatch={dispatch} />}
        {(activeTab == 'export') && (
          <div className={styles.placeholder}>
            <header>Export</header>
            <div>This feature is under construction.</div>
          </div>)}
        {(activeTab == 'plugin') && (
          <div className={styles.placeholder}>
            <header>Plugin</header>
            <div>This feature is under construction.</div>
          </div>)}
      </section>
    </ProjectDataContext>
  );
}
