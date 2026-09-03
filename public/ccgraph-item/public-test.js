customType = {
  name: 'Step Area',
  parameter: [
    {
      name: 'stroke',
      type: 'group',
      child: [
        {
          name: 'stroke color',
          type: 'color'
        },
        {
          name: 'stroke width',
          type: 'number'
        },
        {
          name: 'dash-array',
          type: 'string'
        }
      ]
    },
    {
      name: 'fill',
      type: 'color'
    },
    {
      name: 'data',
      type: 'timetable'
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
