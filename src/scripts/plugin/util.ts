export function calculateNiceBounds(minVal: number, maxVal: number, tickCount = 5) {
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