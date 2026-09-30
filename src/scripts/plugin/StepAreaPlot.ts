import type { TvgElement } from "../tiny-vector-graphics/TvgType";
import type { CCPlotFigureArg, CCPlotGraphArg, CCPlotGraphType } from "./common";
import { calculateNiceBounds } from "./util";

const DAY_MILLIS = 24 * 60 * 60 * 1000;

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
const ColorTableFill = ['#1f77b450',
  '#ff7f0e50',
  '#2ca02c50',
  '#d6272850',
  '#9467bd50',
  '#8c564b50',
  '#e377c250',
  '#7f7f7f50',
  '#bcbd2250',
  '#17becf50'
];

export const StepAreaPlot: CCPlotGraphType = {
  name: 'step-area',
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
    const bounds = calculateNiceBounds(0, graphRange[1]);
    graphArg.data.forEach((item, index) => {
      const l = Math.min(item.datetime.length, item.value.length);
      const points: [number, number][] = [];
      for (let i = 0; i < l; ++i) {
        const datetime = item.datetime[i];
        if (datetime === undefined) continue;
        let value = parseFloat(item.value[i]);
        if (!Number.isFinite(value)) value = 0;
        points.push([
          figureArg.width * (datetime.getTime() - startDate) / DAY_MILLIS / durationDay,
          graphArg.height * (bounds.max - value) / (bounds.max - bounds.min)
        ]);
      }
      points.push([figureArg.width, 0]);
      for (let i = 0; i < points.length - 1; i++) {
        result.push({
          type: 'rect',
          x: points[i][0],
          y: points[i][1],
          width: points[i + 1][0] - points[i][0],
          height: graphArg.height - points[i][1],
          fill: {
            color: ColorTableFill[Math.min(graphArg.dataIndex + index, ColorTableFill.length - 1)]
          },
          stroke: {
            color: ColorTable[Math.min(graphArg.dataIndex + index, ColorTable.length - 1)],
            width: 0.5
          }
        });
      }
    });
    return result;
  }
}