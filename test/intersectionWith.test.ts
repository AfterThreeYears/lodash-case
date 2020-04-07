import _ from 'lodash';
import intersection from './intersection.test';

function intersectionWith<T = any>(arrays: T[], otherArray: T[], comparator: Function | string) {
  return intersection(arrays, otherArray, comparator);
}

test('should ', () => {
  var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
  var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

  expect(_.intersectionWith(objects, others, _.isEqual)).toEqual([{ 'x': 1, 'y': 2 }]);

  expect(intersectionWith(objects, others, _.isEqual)).toEqual([{ 'x': 1, 'y': 2 }]);
});
