import type { CCGraph } from '../types/CCGraph';
import { DataTab } from './main-section-tab/DataTab';
import styles from './MainSection.module.css'
import { PlotTab } from './main-section-tab/PlotTab';

export default function MainSection({ activeTab, ccgraph, activeUuid, dispatch }: {
  activeTab: string,
  ccgraph: CCGraph,
  activeUuid: string,
  dispatch: CallableFunction
}) {
  return (
    <section className={styles.main}>
      {(activeTab == 'data') && <DataTab />}
      {(activeTab == 'plot') && <PlotTab ccgraph={ccgraph} activeUuid={activeUuid} dispatch={dispatch}/>}
    </section>
  );
}