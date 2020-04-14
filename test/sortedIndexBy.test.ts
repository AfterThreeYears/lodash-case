import _ from 'lodash';
import { sortedIndex } from './sortedIndex.test';

const sortedIndexBy = sortedIndex;

test('should ', () => {
  const objects = [{ 'x': 4 }, { 'x': 5 }];

  expect(_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; })).toBe(0);
  expect(_.sortedIndexBy(objects, { 'x': 4 }, 'x')).toBe(0);

  expect(sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; })).toBe(0);
  expect(sortedIndexBy(objects, { 'x': 4 }, 'x')).toBe(0);
});
