export function returnValue<T>(value: T) {
  return value;
}

export function exch<T>(array: T[], i: number, j: number) {
  let tmp: T = array[i];
  array[i] = array[j];
  array[j] = tmp;
}