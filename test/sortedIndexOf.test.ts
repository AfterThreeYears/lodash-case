import _ from 'lodash';
import { sortedIndex, Iteratee } from './sortedIndex.test';

function sortedIndexOf<T>(array: T[], value: T, iteratee: Iteratee<T> = _.identity) {
  return sortedIndex(array, value, iteratee, false, true);
}

test('should ', () => {
  expect(_.sortedIndexOf([4, 5, 5, 5, 6], 10)).toBe(-1);

  expect(sortedIndexOf([4, 5, 5, 5, 6], 10)).toBe(-1);
})
