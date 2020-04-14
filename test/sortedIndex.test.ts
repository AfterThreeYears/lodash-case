import _ from 'lodash';

export type Iteratee<T> = string | ((val: T) => any);

function convert<T>(value: T, iteratee: Iteratee<T>) {
  if (_.isFunction(iteratee)) {
    return iteratee(value);
  } else if (_.isString(iteratee)) {
    return value[iteratee];
  }
  return value;
}

export function sortedIndex<T = number>(array: T[], value: T, iteratee: Iteratee<T> = _.identity, isReverse = false) {
  let start = 0;
  let end = array.length - 1;
  let mid: number;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const element = convert(array[mid], iteratee);
    const realValue = convert(value, iteratee);
    if (element > realValue) {
      end = mid - 1;
    } else if (element < realValue) {
      start = mid + 1;
    } else {
      if (isReverse) {
        while (mid < array.length && convert(array[mid + 1], iteratee) === element) {
          mid += 1;
        }
        mid += 1;
      } else {
        while (mid > 0 && convert(array[mid - 1], iteratee) === element) {
          mid -= 1;
        }
      }
      return mid;
    }
  }
  return start;
}

test('should ', () => {
  expect(_.sortedIndex([30, 50], 40)).toBe(1);
  expect(_.sortedIndex([4, 5, 5, 5, 6], 5)).toBe(1);

  expect(sortedIndex([30, 50], 40)).toBe(1);
  expect(sortedIndex([4, 5, 5, 5, 6], 5)).toBe(1);
})
