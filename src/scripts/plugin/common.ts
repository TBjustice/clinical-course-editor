import type { TvgElement } from '../tiny-vector-graphics/TvgType'
export type CCPlotParameterNumber = {
  type: 'number',
  name: string,
  hasDefault: boolean,
  initial: number,
  min?: number,
  max?: number,
  step?: number
}

export type CCPlotParameterSelect = {
  type: 'select',
  name: string,
  hasDefault: boolean,
  initial: number,
  options: string[]
}

export type CCPlotGraphParameter =
  | CCPlotParameterNumber
  | CCPlotParameterSelect;

export type CCPlotGraphData = {
  name: string,
  datetime: (Date | undefined)[],
  value: string[]
}

export type CCPlotGraphArg = {
  name: string,
  height: number,
  dataIndex: number,
  data: CCPlotGraphData[]
}

export type CCPlotFigureArg = {
  width: number,
  dateRange: [Date, Date]
}

export type CCPlotGraphType = {
  name: string,
  parameters: CCPlotGraphParameter[],
  setDefault: CallableFunction,
  render: (graphArg: CCPlotGraphArg, figureArg: CCPlotFigureArg) => TvgElement[]
}
