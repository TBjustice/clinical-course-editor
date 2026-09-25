import type { CCGraph } from '../types/CCGraph';
import { DataTab } from './main-section-tab/DataTab';
import styles from './MainSection.module.css'
import { PlotTab } from './main-section-tab/PlotTab';

export default function MainSection({ activeTab, ccgraph }: {
  activeTab: string,
  ccgraph: CCGraph
}) {
  return (
    <section className={styles.main}>
      {(activeTab == 'data') && <DataTab />}
      {(activeTab == 'plot') && <PlotTab ccgraph={ccgraph} />}
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
  );
}
