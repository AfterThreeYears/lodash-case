import _ from 'lodash';

type Iteratee<T> = string | ((val: T) => any);

function convert<T>(value: T, iteratee: Iteratee<T>) {
  if (_.isFunction(iteratee)) {
    return iteratee(value);
  } else if (_.isString(iteratee)) {
    return value[iteratee];
  }
  return value;
}

export function sortedIndex<T = number>(array: T[], value: T, iteratee: Iteratee<T> = _.identity) {
  let start = 0;
  let end = array.length - 1;
  let mid: number;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (convert(array[mid], iteratee) > convert(value, iteratee)) {
      end = mid - 1;
    } else if (convert(array[mid], iteratee) < convert(value, iteratee)) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  return start;
}

test('should ', () => {
  expect(_.sortedIndex([30, 50], 40)).toBe(1);

  expect(sortedIndex([30, 50], 40)).toBe(1);
})
