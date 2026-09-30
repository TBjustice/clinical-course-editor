import { DataTab } from './main-section-tab/DataTab';
import styles from './MainSection.module.css'
import { PlotTab } from './main-section-tab/PlotTab';

export default function MainSection({ activeTab }: { activeTab: string }) {
  return (
    <section className={styles.main}>
      {(activeTab == 'data') && <DataTab />}
      {(activeTab == 'plot') && <PlotTab />}
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
