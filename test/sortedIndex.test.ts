import _ from 'lodash';

function sortedIndex<T = number>(array: T[], value: T) {
  let start = 0;
  let end = array.length - 1;
  let mid: number;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] > value) {
      end = mid - 1;
    } else if (array[mid] < value) {
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
