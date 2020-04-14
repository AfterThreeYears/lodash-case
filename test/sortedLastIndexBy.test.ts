import _ from 'lodash';
import { sortedIndex, Iteratee } from './sortedIndex.test';

function sortedLastIndexBy<T>(array: T[], value: T, iteratee: Iteratee<T> = _.identity) {
  return sortedIndex(array, value, iteratee, true);
}

test('should ', () => {
  var objects = [{ 'x': 4 }, { 'x': 5 }];
  expect(_.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; })).toBe(1);

  expect(sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; })).toBe(1);
});
