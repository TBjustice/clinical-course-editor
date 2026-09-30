import type { TvgElement } from "../tiny-vector-graphics/TvgType";
import type { CCPlotFigureArg, CCPlotGraphArg, CCPlotGraphType } from "./common";
import { calculateNiceBounds } from "./util";

const DAY_MILLIS = 24 * 60 * 60 * 1000;

const DashArrayTable = [
  [],
  [3, 1],
  [1, 2],
  [3, 1, 1, 1]
];
const ColorTable = ['#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf'
];

export const LinePlot: CCPlotGraphType = {
  name: 'line',
  parameters: [],
  setDefault: () => { },
  render(graphArg: CCPlotGraphArg, figureArg: CCPlotFigureArg): TvgElement[] {
    const result: TvgElement[] = [];
    const startDate = figureArg.dateRange[0].getTime();
    const endDate = figureArg.dateRange[1].getTime();
    const durationDay = (endDate - startDate) / DAY_MILLIS;
    const graphRange = [Number.MAX_VALUE, Number.MIN_VALUE];
    graphArg.data.forEach((item) => {
      const valid = item.value.map((item) => parseFloat(item)).filter((item) => (Number.isFinite(item)));
      graphRange[0] = Math.min(graphRange[0], valid.reduce((a, b) => (Math.min(a, b))));
      graphRange[1] = Math.max(graphRange[1], valid.reduce((a, b) => (Math.max(a, b))));
    });
    if (graphRange[0] > graphRange[1]) return [];
    const bounds = calculateNiceBounds(graphRange[0], graphRange[1]);
    graphArg.data.forEach((item, index) => {
      const l = Math.min(item.datetime.length, item.value.length);
      const points: [number, number][] = [];
      for (let i = 0; i < l; ++i) {
        const datetime = item.datetime[i];
        if (datetime === undefined) continue;
        const value = parseFloat(item.value[i]);
        if (!Number.isFinite(value)) continue;
        points.push([
          figureArg.width * (datetime.getTime() - startDate) / DAY_MILLIS / durationDay,
          graphArg.height * (bounds.max - value) / (bounds.max - bounds.min)
        ]);
      }
      result.push({
        type: 'polyline',
        points: points,
        stroke: {
          color: ColorTable[Math.min(graphArg.dataIndex + index, ColorTable.length - 1)],
          width: 1,
          dasharray: DashArrayTable[Math.min(graphArg.dataIndex + index, DashArrayTable.length - 1)]
        }
      });
    });
    return result;
  }
}