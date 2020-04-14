import _ from 'lodash';
import { sortedIndex, Iteratee } from './sortedIndex.test';

function sortedLastIndexOf<T>(array: T[], value: T, iteratee: Iteratee<T> = _.identity) {
  return sortedIndex(array, value, iteratee, true, true);
}

test('should ', () => {
  expect(_.sortedLastIndexOf([4, 5, 5, 5, 6], 10)).toBe(-1);
  expect(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5)).toBe(3);

  expect(sortedLastIndexOf([4, 5, 5, 5, 6], 10)).toBe(-1);
  expect(sortedLastIndexOf([4, 5, 5, 5, 6], 5)).toBe(3);
})
