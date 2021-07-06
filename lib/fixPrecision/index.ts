export function fixPrecision(num: number) {
  return parseFloat(num.toPrecision(12).slice(0, 12));
}
