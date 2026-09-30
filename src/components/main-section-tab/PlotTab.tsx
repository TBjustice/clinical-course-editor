import PlotLayerEditor from './PlotTabPlotLayerEditor';
import stylesCmn from './common.module.css'
import styles from './PlotTab.module.css'
import { ProjectNameHeader } from './ProjectNameHeader';
import PlotLayerList from './PlotTabPlotLayer';
import { useProjectDataStore } from '../../stores/ProjectDataStore';
import ParseDate from '../../scripts/ParseDate';
import SvgAutoViewbox from '../ui/SvgAutoViewbox';
import { TvgToSvg } from '../ui/TvgToSvg';
import type { Group, TvgElement } from '../../scripts/tiny-vector-graphics/TvgType';
import type { CCPlotFigureArg, CCPlotGraphArg } from '../../scripts/plugin/common';
import { LinePlot } from '../../scripts/plugin/LinePlot';
import { StepAreaPlot } from '../../scripts/plugin/StepAreaPlot';

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

type PlotDataItem = {
  tableIndex: number,
  headerIndex: number,
  name: string
};

function parseDatetime(datetime: string[]): (Date | undefined)[] {
  const result: (Date | undefined)[] = [];
  const now = new Date();
  let lastDate = {
    y: now.getFullYear(),
    m: now.getMonth() + 1,
    d: now.getDate()
  };
  for (let i = 0; i < datetime.length; ++i) {
    const ymd = ParseDate(datetime[i], lastDate.y, lastDate.m);
    if (ymd) {
      result.push(new Date(ymd.y, ymd.m - 1, ymd.d));
      lastDate = ymd;
    }
    else {
      result.push(undefined);
    }
  }
  return result;
}

export function PlotTabView() {
  const tableList = useProjectDataStore((state) => state.tableList);
  const layerUuid = useProjectDataStore((state) => state.layerUuid);
  const layerList = useProjectDataStore((state) => state.layerList);

  const dateRange: (Date | undefined)[] = [undefined, undefined];
  const datetimeLut: (Date | undefined)[][] = [];
  const plotDataItemLut: Record<string, PlotDataItem> = {};
  tableList.forEach((table, tableIndex) => {
    table.header.forEach((item, headerIndex) => {
      plotDataItemLut[item.uuid] = {
        tableIndex, headerIndex,
        name: item.name
      };
    });
    const datetime = parseDatetime(table.datetime);
    datetimeLut.push(datetime);
    const filtered = datetime.filter((item) => (item != undefined));
    if (filtered.length > 0) {
      const lMin = filtered.reduce((a, b) => (a < b ? a : b));
      const lMax = filtered.reduce((a, b) => (a > b ? a : b));
      dateRange[0] = dateRange[0] === undefined ? lMin : (lMin < dateRange[0] ? lMin : dateRange[0]);
      dateRange[1] = dateRange[1] === undefined ? lMax : (lMax > dateRange[1] ? lMax : dateRange[1]);
    }
  });
  if (dateRange[0] == undefined || dateRange[1] == undefined) {
    return undefined;
  }

  const figureArg: CCPlotFigureArg = {
    width: 300,
    dateRange: [dateRange[0], dateRange[1]]
  };
  const tvg: TvgElement[] = [];
  let heightOffset = 0;
  layerUuid.forEach((layer) => {
    let dataIndexCount = 0;
    const group: Group = {
      type: 'group',
      children: [],
      transform: [1, 0, 0, 1, 0, heightOffset]
    };
    layerList[layer].plotList.forEach((plot) => {
      const graphArg: CCPlotGraphArg = {
        name: layerList[layer].name,
        height: layerList[layer].height,
        dataIndex: dataIndexCount,
        data: []
      };
      plot.target.forEach((dataUuid) => {
        graphArg.data.push({
          name: plotDataItemLut[dataUuid].name,
          datetime: datetimeLut[plotDataItemLut[dataUuid].tableIndex],
          value: tableList[plotDataItemLut[dataUuid].tableIndex].data.map((item) => {
            const x = item[plotDataItemLut[dataUuid].headerIndex];
            return x === null ? '' : String(x);
          })
        });
      });
      if (graphArg.data.length > 0) {
        if (plot.type == 'line') {
          group.children.push(...LinePlot.render(graphArg, figureArg));
        }
        else if (plot.type == 'step-area') {
          group.children.push(...StepAreaPlot.render(graphArg, figureArg));
        }
      }
      dataIndexCount += graphArg.data.length;
    });
    tvg.push(group);
    heightOffset += layerList[layer].height;
  });
  /**/

  return (
    <>
      <SvgAutoViewbox padding={2}>
        <TvgToSvg tvg={tvg} />
      </SvgAutoViewbox>
    </>
  )
}

export function PlotTab() {
  return (
    <>
      <div className={stylesCmn.editor}>
        <ProjectNameHeader />
        <PlotTabEditor />
      </div>
      <div className={`${stylesCmn.view} ${styles.preview}`}>
        <PlotTabView />
      </div>
    </>
  );
}
