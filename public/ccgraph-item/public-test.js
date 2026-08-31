customType = {
  parameter: [
    {
      name: 'line width',
      type: 'number'
    },
    {
      name: 'line color',
      type: 'color'
    },
    {
      name: 'data',
      type: 'table'
    }
  ],
  renderer: function(name, dateRange, yRange, data) {
    // name is a string
    // dateRange is [Date, Date]
    // yRange is [number, number]
    // data is an any-type
    const left = 20;
    const right = 10;
    const svgText = '';
    return {left, right, svgText};
  }
}
