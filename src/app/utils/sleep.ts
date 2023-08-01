export function sleep(ms = 700) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
