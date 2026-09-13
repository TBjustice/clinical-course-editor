export type PlotParameterNumber = {
  type: 'number',
  name: string,
  initial: number,
  min?: number,
  max?: number,
  step?: number
}

export type PlotParameterGroup = {
  type: 'group',
  name: string,
  list: PlotParameter[]
}

export type PlotParameter =
  | PlotParameterNumber
  | PlotParameterGroup;

export type PlotType = {
  name: string,
  acceptMultiple: boolean,
  parameters: PlotParameter[],
  render: CallableFunction
}
