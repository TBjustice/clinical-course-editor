import PlotLayerEditor from './PlotTabPlotLayerEditor';
import type { CCGraph } from '../../types/CCGraph';
import stylesCmn from './common.module.css'
import styles from './PlotTab.module.css'
import SvgAutoViewbox from '../ui/SvgAutoViewbox';
import { TvgToSvg } from '../ui/TvgToSvg';
import { TvgElementSchema, type TvgElement } from '../../scripts/tiny-vector-graphics/TvgType';
import z from 'zod';
import { ProjectNameHeader } from './ProjectNameHeader';
import PlotLayerList from './PlotTabPlotLayer';
import { useProjectDataStore } from '../../stores/ProjectDataStore';

export function PlotTabEditor() {
  const activeLayer = useProjectDataStore((state) => (state.activeLayerUuid in state.layerList ? state.layerList[state.activeLayerUuid] : undefined));
  return (
    <div className={stylesCmn.list_and_editor}>
      <section className={stylesCmn.list_section}>
        <header>
          <span className='lang-en'>Graph Layer</span>
          <span className='lang-jp'>グラフレイヤー</span>
        </header>
        <PlotLayerList />
      </section>
      <section className={`${stylesCmn.editor_section} ${styles.editor}`}>
        {activeLayer && (
          <PlotLayerEditor activeLayer={activeLayer} />
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
    <>
      <SvgAutoViewbox padding={2}>
        <TvgToSvg tvg={tvg} />
      </SvgAutoViewbox>
    </>
  )
}

export function PlotTab({ ccgraph }: { ccgraph: CCGraph }) {
  return (
    <>
      <div className={stylesCmn.editor}>
        <ProjectNameHeader />
        <PlotTabEditor />
      </div>
      <div className={`${stylesCmn.view} ${styles.preview}`}>
        <PlotTabView ccgraph={ccgraph} />
      </div>
    </>
  );
}
