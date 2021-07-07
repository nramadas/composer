export function totalBeatLength(beatLengths: number[]) {
  const total = beatLengths.reduce((acc, b) => acc + 12 / b, 0);
  return total / 12;
}
