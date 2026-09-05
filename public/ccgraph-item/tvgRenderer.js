function CCGraphRendererTvg(data) {
  try {
    const width = data.width;
    const uuidList = data.uuidList;
    const ccgraphItems = data.ccgraphItems;
    const result = [];
    let y = 5;
    uuidList.map((value) => {
      const ccgraphItem = ccgraphItems[value];
      const name = ccgraphItem.name;
      const type = ccgraphItem.type;
      const height = ccgraphItem.height;
      const data = ccgraphItem.data;
      if (typeof data == 'string') {
        const table = createTable(data);
        if (type == 'line') {
          result.push({
            type: 'group',
            children: lineRenderer([y, y + height], table)
          });
        }
        else if (type == 'step-area') {
          result.push({
            type: 'group',
            children: stepAreaRenderer([y, y + height], table)
          });
        }
        else {
          result.push({
            type: 'group',
            children: createPlaceholder(name, width, [y, y + height])
          });
        }
      }
      y += height + 5;
    });
    return result;
  }
  catch (e) {
    console.error(e);
    return [];
  }
}

function createPlaceholder(name, width, yRange) {
  const height = yRange[1] - yRange[0];
  return [
    {
      type: 'rect',
      x: 2,
      y: yRange[0] + 2,
      width: width - 4,
      height: height - 4,
      stroke: {
        color: 'gray',
        width: 0.5,
        dasharray: [3, 3]
      }
    },
    {
      type: 'text',
      x: width * 0.5,
      y: yRange[0] + height * 0.5,
      text: name,
      fontStyle: {
        size: 10,
        align: 'middle',
        baseline: 'middle'
      },
      fill: { color: 'black' }
    }
  ];
}

function createTable(data) {
  const lines = data.split(/\r?\n/);
  const rows = [];
  lines.map((line, index) => {
    const data = line.split(',');
    if (index == 0) {
      for (let col = 0; col < data.length; ++col) {
        rows.push([]);
      }
    }
    if (data.length == rows.length) {
      for (let col = 0; col < rows.length; ++col) {
        rows[col][index] = data[col];
      }
    }
  });
  return rows;
}

function lineRenderer(yRange, table) {
  if (table.length <= 1) return [];
  const DashArrayTable = [
    [],
    [3, 1],
    [1, 3],
    [3, 1, 1, 1]
  ]
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
  const result = [];
  const x = table[0].map((value) => { return parseFloat(value); });
  for (let col = 1; col < table.length; ++col) {
    const y = table[col].map((value) => { return parseFloat(value); });
    const validY = y.filter((value => { return isFinite(value) }));
    const yMax = Math.max(...validY);
    const yMin = Math.min(...validY);
    const niceBounds = calculateNiceBounds(yMin, yMax);
    const scale = (yRange[1] - yRange[0]) / (niceBounds.max - niceBounds.min);

    const points = [];
    for (let i = 0; i < x.length; ++i) {
      if (typeof x[i] != 'number' || !Number.isFinite(x[i])) continue;
      if (typeof y[i] != 'number' || !Number.isFinite(y[i])) continue;
      points.push([x[i], yRange[1] - (y[i] - niceBounds.min) * scale]);
    }
    result.push({
      type: 'polyline',
      points: points,
      stroke: {
        color: ColorTable[Math.min(col - 1, ColorTable.length - 1)],
        width: 1,
        dasharray: DashArrayTable[Math.min(col - 1, DashArrayTable.length - 1)]
      }
    });
    result.push({
      type: 'text',
      x: -(col - 1) * 12 - 2,
      y: yRange[1],
      text: String(niceBounds.min),
      fontStyle: {
        align: 'end',
        baseline: 'middle',
        size: 4
      },
      fill: { color: 'black' }
    });
    result.push({
      type: 'text',
      x: -(col - 1) * 12 - 2,
      y: yRange[0],
      text: String(niceBounds.max),
      fontStyle: {
        align: 'end',
        baseline: 'middle',
        size: 4
      },
      fill: { color: 'black' }
    });
    result.push({
      type: 'line',
      x1: -(col - 1) * 12,
      y1: yRange[0],
      x2: -(col - 1) * 12,
      y2: yRange[1],
      stroke: { color: ColorTable[(col - 1) % ColorTable.length], width: 0.5 }
    });
    result.push({
      type: 'line',
      x1: -(col - 1) * 12,
      y1: yRange[0],
      x2: -(col - 1) * 12 - 2,
      y2: yRange[0],
      stroke: { color: ColorTable[(col - 1) % ColorTable.length], width: 0.5 }
    });
    result.push({
      type: 'line',
      x1: -(col - 1) * 12,
      y1: yRange[1],
      x2: -(col - 1) * 12 - 2,
      y2: yRange[1],
      stroke: { color: ColorTable[(col - 1) % ColorTable.length], width: 0.5 }
    });
    /*
    text += `<text text-anchor="middle" dominant-baseline="text-bottom" font-size="6" x="${-(col - 1) * 12 - 2}" y="${(yRange[0] + yRange[1]) * 0.5}" transform="rotate(-90, ${-(col - 1) * 12 - 2}, ${(yRange[0] + yRange[1]) * 0.5})">Label</text>`;
    */
  }
  return result;
}

function stepAreaRenderer(yRange, table) {
  if (table.length <= 1) return [];
  const result = [];
  const x = table[0].map((value) => { return parseFloat(value); });
  const y = table[1].map((value) => { return parseFloat(value); });
  const validY = y.filter((value => { return isFinite(value) }));
  const yMax = Math.max(...validY);
  const scale = (yRange[1] - yRange[0]) / (yMax + 0.01);
  for (let i = 0; i < x.length; ++i) {
    if (typeof x[i] != 'number' || !Number.isFinite(x[i])) continue;
    if (typeof y[i] != 'number' || !Number.isFinite(y[i])) continue;
    let width = (i == x.length - 1) ? (300 - x[i]) : (x[i + 1] - x[i]);
    if (width <= 0 || y[i] <= 0) continue;
    result.push({
      type: 'rect',
      x: x[i],
      y: yRange[1] - y[i] * scale,
      width: width + 1,
      height: y[i] * scale,
      fill: { color: 'rgb(157, 218, 157)' }
    });
  }
  return result;
}

function calculateNiceBounds(minVal, maxVal, tickCount = 5) {
  if (minVal === maxVal) return { min: minVal - 1, max: maxVal + 1, step: 1 };

  const roughStep = (maxVal - minVal) / (tickCount - 1);
  const stepPower = Math.floor(Math.log10(roughStep));
  const fraction = roughStep / Math.pow(10, stepPower);

  let niceFraction;
  if (fraction <= 1.5) niceFraction = 1;
  else if (fraction <= 3) niceFraction = 2;
  else if (fraction <= 7) niceFraction = 5;
  else niceFraction = 10;

  const niceStep = niceFraction * Math.pow(10, stepPower);
  const niceMin = Math.floor(minVal / niceStep) * niceStep;
  const niceMax = Math.ceil(maxVal / niceStep) * niceStep;

  return { min: niceMin, max: niceMax, step: niceStep };
}
