import type { CCGraph } from '../types/CCGraph';
import { DataTabView } from './DataTab';
import styles from './MainSection.module.css'
import { PlotTabEditor, PlotTabView } from './PlotTab';

function MainHeader({ sidebarOpen, setSidebarOpen }: {
  sidebarOpen: boolean,
  setSidebarOpen: CallableFunction
}) {
  return (
    <header className={styles.header}>
      <button
        className={`${styles.toggle_sidebar} has-tooltip`}
        onClick={() => { setSidebarOpen(!sidebarOpen) }}>
        {sidebarOpen && (<span className='material-icons'>menu_open</span>)}
        {!sidebarOpen && (<span className='material-icons'>keyboard_arrow_right</span>)}
        <div className='tooltip-right tooltip'>
          {sidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </div>
      </button>
      <div className={styles.project_name}>
        Untitled Project
      </div>
      <menu>
        <button className='has-tooltip'>
          <span className='material-icons-outlined'>edit</span>
          <div className='tooltip-right tooltip'>Rename Project</div>
        </button>
        <button className='has-tooltip'>
          <span className='material-icons-outlined'>save_as</span>
          <div className='tooltip-right tooltip'>Save As</div>
        </button>
      </menu>
    </header>
  );
}

function EditorContent({ activeTab, ccgraph, activeUuid, dispatch }: {
  activeTab: string,
  ccgraph: CCGraph,
  activeUuid: string,
  dispatch: CallableFunction
}) {
  switch (activeTab) {
    case 'data':
      return (<>data</>);
    case 'plot':
      return (<PlotTabEditor activeUuid={activeUuid} ccgraph={ccgraph} dispatch={dispatch} />);
    case 'export':
      return (<>export</>);
    case 'extension':
      return (<>extension</>);
  }
  return (<></>);
}

function ViewContent({ activeTab, ccgraph }: {
  activeTab: string
  ccgraph: CCGraph
}) {
  switch (activeTab) {
    case 'data':
      return (<DataTabView/>);
    case 'plot':
    case 'export':
      return (<PlotTabView ccgraph={ccgraph} />);
    case 'extension':
      return (<>Extension Detail</>);
  }
  return (<></>);
}

export default function MainSection({ sidebarOpen, setSidebarOpen, activeTab, ccgraph, activeUuid, dispatch }: {
  sidebarOpen: boolean,
  setSidebarOpen: CallableFunction,
  activeTab: string,
  ccgraph: CCGraph,
  activeUuid: string,
  dispatch: CallableFunction
}) {
  return (
    <section className={styles.main}>
      <div className={styles.editor}>
        <MainHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <EditorContent activeTab={activeTab} activeUuid={activeUuid} ccgraph={ccgraph} dispatch={dispatch} />
      </div>
      <div className={styles.view}>
        <ViewContent activeTab={activeTab} ccgraph={ccgraph} />
      </div>
    </section>
  )
}