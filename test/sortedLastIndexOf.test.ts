import _ from 'lodash';
import { sortedIndex } from './sortedIndex.test';

function sortedLastIndexOf<T>(array: T[], value: T) {
  return sortedIndex(array, value, _.identity, true, true, true);
}

test('should ', () => {
  expect(_.sortedLastIndexOf([4, 5, 5, 5, 6], 10)).toBe(-1);
  expect(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5)).toBe(3);

  expect(sortedLastIndexOf([4, 5, 5, 5, 6], 10)).toBe(-1);
  expect(sortedLastIndexOf([4, 5, 5, 5, 6], 5)).toBe(3);
})
