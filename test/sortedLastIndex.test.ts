import _ from 'lodash';
import { sortedIndex } from './sortedIndex.test';

function sortedLastIndex<T>(array: T[], value: T) {
  return sortedIndex(array, value, _.identity, true);
}

test('should ', () => {
  expect(_.sortedLastIndex([4, 5, 5, 5, 6], 5)).toBe(4);

  expect(sortedLastIndex([4, 5, 5, 5, 6], 5)).toBe(4);
});
