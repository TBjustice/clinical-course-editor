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

export type CCPlotParameterGroup = {
  type: 'group',
  name: string,
  list: CCPlotGraphParameter[]
}

export type CCPlotGraphParameter =
  | CCPlotParameterNumber
  | CCPlotParameterSelect
  | CCPlotParameterGroup;

export type CCPlotGraphType = {
  name: string,
  parameters: CCPlotGraphParameter[],
  setDefault: CallableFunction,
  render: (value: any) => TvgElement[]
}
