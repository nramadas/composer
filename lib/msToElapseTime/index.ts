const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

export function msToElapsedTime(ms: number) {
  const hours = Math.floor(ms / HOUR);
  let remainingTime = ms - hours * HOUR;
  const minutes = Math.floor(remainingTime / MINUTE);
  remainingTime = remainingTime - minutes * MINUTE;
  const seconds = Math.floor(remainingTime / SECOND);
  return { hours, minutes, seconds };
}

const pad = (ms: number) => String(ms).padStart(2, '0');

export function msToElapsedTimeStr(ms: number) {
  const { hours, minutes, seconds } = msToElapsedTime(ms);
  const str = `${pad(minutes)}:${pad(seconds)}`;
  return hours ? `${pad(hours)}:${str}` : str;
}
