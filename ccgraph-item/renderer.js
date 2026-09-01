function CCGraphRenderer(data) {
  try {
    const width = data.width;
    const uuidList = data.uuidList;
    const ccgraphItems = data.ccgraphItems;
    let inner = '';
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
          inner += lineRenderer([y, y + height], table);
        }
        else if (type == 'step-area') {
          inner += stepAreaRenderer([y, y + height], table);
        }
        else {
          inner += `<rect x="${2}" y="${y + 2}" width="${width - 4}" height="${height - 4}" stroke="gray" fill="none" stroke-width="0.5" stroke-dasharray="3 3"/>`;
          inner += `<text text-anchor="middle" dominant-baseline="middle" font-size="10" x="${width / 2.0}" y="${y + height / 2.0}">${name}</text>`;
        }
      }
      y += height + 5;
    });
    return `
  <svg version="1.1"
    viewBox="0 0 ${width} ${y}"
    xmlns="http://www.w3.org/2000/svg">
    ${inner}
  </svg>
  `;
  }
  catch(e) {
    console.log(e);
  }
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
  if (table.length <= 1) return "";
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
  let result = "";
  const x = table[0].map((value) => { return parseFloat(value); });
  for (let col = 1; col < table.length; ++col) {
    let text = `<polyline points="`;
    const y = table[col].map((value) => { return parseFloat(value); });
    const yMax = Math.max(...y);
    const yMin = Math.min(...y);
    const scale = (yRange[1] - yRange[0]) / (yMax - yMin + 0.01);
    for (let i = 0; i < x.length; ++i) {
      if (typeof x[i] != 'number' || !Number.isFinite(x[i])) continue;
      if (typeof y[i] != 'number' || !Number.isFinite(y[i])) continue;
      text += `${x[i]},${yRange[1] - (y[i] - yMin) * scale} `;
    }
    text += `" stroke="${ColorTable[(col - 1) % ColorTable.length]}" fill="none"/>`
    result += text + '\n';
  }
  return result;
}

function stepAreaRenderer(yRange, table) {
  if (table.length <= 1) return "";
  let result = "";
  const x = table[0].map((value) => { return parseFloat(value); });
  const y = table[1].map((value) => { return parseFloat(value); });
  const yMax = Math.max(...y);
  const scale = (yRange[1] - yRange[0]) / (yMax + 0.01);
  for (let i = 0; i < x.length; ++i) {
    if (typeof x[i] != 'number' || !Number.isFinite(x[i])) continue;
    if (typeof y[i] != 'number' || !Number.isFinite(y[i])) continue;
    let width = (i == x.length - 1) ? (300 - x[i]) : (x[i + 1] - x[i]);
    if (width <= 0 || y[i] <= 0) continue;
    result += `<rect x="${x[i]}" y="${yRange[1] - y[i] * scale}" width="${width + 1}" height="${y[i] * scale}" fill="rgb(157, 218, 157)" />`;
  }
  return result;
}