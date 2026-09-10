import CCGraphEditor from '../CCGraphEditor';
import CCGraphListview from '../CCGraphListview';
import type { CCGraph } from '../types/CCGraph';
import styles from './PlotEditor.module.css'


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

export default function PlotEditor({ ccgraph, activeUuid, dispatch }: {
  ccgraph:CCGraph,
   activeUuid: string,
   dispatch: CallableFunction }) {

  function addGraph() {
    dispatch({
      type: 'ADD_ITEM',
      payload: crypto.randomUUID()
    });
  }

  const ccgraphListProp = ccgraph.uuidList.map(uuid => ({
    uuid,
    name: ccgraph.ccgraphItems[uuid].name
  }));

  return (
    <div className={styles.container}>
      <section className={styles.layer_editor}>
        <header>
          Graph Layer
        </header>
        <menu>
          <button onClick={addGraph}>add</button>
          <button onClick={
            () => { saveGraphAsFile(ccgraph, 'graph.json') }
          }>save</button>
          <button>load</button>
        </menu>
        <CCGraphListview items={ccgraphListProp} activeUuid={activeUuid} dispatch={dispatch} />
      </section>
      <section className={styles.editor}>
        {activeUuid.length > 0 && (
          <CCGraphEditor
            uuid={activeUuid}
            ccgraphItem={ccgraph.ccgraphItems[activeUuid]}
            dispatch={dispatch} />
        )}
      </section>
    </div>
  )
}