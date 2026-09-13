import CCGraphEditor from '../../CCGraphEditor';
import CCGraphListview from '../../CCGraphListview';
import type { CCGraph } from '../../types/CCGraph';
import stylesCmn from './common.module.css'
import styles from './PlotTab.module.css'
import SvgAutoViewbox from '../ui/SvgAutoViewbox';
import { TvgToSvg } from '../ui/TvgToSvg';
import { TvgElementSchema, type TvgElement } from '../../scripts/tiny-vector-graphics/TvgType';
import z from 'zod';
import { ProjectNameHeader } from './ProjectNameHeader';

/*
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
*/

export function PlotTabEditor({ ccgraph, activeUuid, dispatch }: {
  ccgraph: CCGraph,
  activeUuid: string,
  dispatch: CallableFunction
}) {

  const ccgraphListProp = ccgraph.uuidList.map(uuid => ({
    uuid,
    name: ccgraph.ccgraphItems[uuid].name
  }));

  return (
    <div className={stylesCmn.list_and_editor}>
      <section className={stylesCmn.list_section}>
        <header>
          Graph Layer
        </header>
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

export function PlotTabView({ ccgraph }: { ccgraph: CCGraph }) {
  let tvg: TvgElement[] = [];
  if ('CCGraphRendererTvg' in window && typeof window.CCGraphRendererTvg == 'function') {
    const parsed = z.array(TvgElementSchema).safeParse(window.CCGraphRendererTvg(ccgraph));
    if (parsed.success) {
      tvg = parsed.data;
    }
  }

  return (
    <SvgAutoViewbox padding={2}>
      <TvgToSvg tvg={tvg} />
    </SvgAutoViewbox>
  )
}

export function PlotTab({ ccgraph, activeUuid, dispatch }: {
  ccgraph: CCGraph,
  activeUuid: string,
  dispatch: CallableFunction
}){
  return (
    <>
      <div className={stylesCmn.editor}>
        <ProjectNameHeader />
        <PlotTabEditor ccgraph={ccgraph} activeUuid={activeUuid} dispatch={dispatch} />
      </div>
      <div className={`${stylesCmn.view} ${styles.preview}`}>
        <PlotTabView ccgraph={ccgraph}/>
      </div>
    </>
  );
}
