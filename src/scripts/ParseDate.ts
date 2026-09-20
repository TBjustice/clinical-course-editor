export default function ParseDate(text: string, y: number, m: number) {
  const result = { y: NaN, m: NaN, d: NaN, added: '' };
  const data = text.split(/[\/-]/);
  if (data.length == 1) {
    result.y = y;
    result.m = m;
    result.d = parseInt(data[0]);
    result.added = `${y}/${m}/`;
  }
  else if (data.length == 2) {
    result.y = y;
    result.m = parseInt(data[0]);
    result.d = parseInt(data[1]);
    result.added = `${y}/`;
  }
  else if (data.length == 3) {
    result.y = parseInt(data[0]);
    result.m = parseInt(data[1]);
    result.d = parseInt(data[2]);
  }
  if (Number.isNaN(result.y) || Number.isNaN(result.m) || Number.isNaN(result.d)) return undefined;
  const date = new Date(result.y, result.m - 1, result.d);
  if (date.getFullYear() != result.y || date.getMonth() != result.m - 1 || date.getDate() != result.d) return undefined;
  return result;
}