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
  renderer: function(name, graphRect, data) {
    // name is a string
    // graphRect is [x, y, width, height]
    // data is an any-type
    const left = 20;
    const right = 10;
    const svgText = '';
    return {left, right, svgText};
  }
}
