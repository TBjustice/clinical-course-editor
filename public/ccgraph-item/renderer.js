function CCGraphRenderer(data) {
  const width = data.width;
  const uuidList = data.uuidList;
  const ccgraphItems = data.ccgraphItems;
  let inner = '';
  let y = 0;
  uuidList.map((value) => {
    const ccgraphItem = ccgraphItems[value];
    const name = ccgraphItem.name;
    const type = ccgraphItem.type;
    const height = ccgraphItem.height;
    const data = ccgraphItem.data;
    inner += `<rect x="${2}" y="${y}" width="${width-4}" height="${height}" stroke="gray" fill="none"/>`;
    inner += `<text text-anchor="middle" dominant-baseline="middle" font-size="10" x="${width/2.0}" y="${y + height / 2.0}">${name}</text>`;
    y += height;
  });
  return `
  <svg version="1.1"
    viewBox="0 0 ${width} ${y}"
    xmlns="http://www.w3.org/2000/svg">
    ${inner}
  </svg>
  `;
}