import _ from 'lodash';
import intersection from './intersection.test';

function intersectionBy<T = any>(arrays: T[], otherArray: T[], comparator: Function | string) {
  return intersection(arrays, otherArray, comparator);
}

test.only('should ', () => {
  expect(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([2.1]);
  expect(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')).toEqual([{ 'x': 1 }]);

  expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([2.1]);
  expect(intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x')).toEqual([{ 'x': 1 }]);
});
