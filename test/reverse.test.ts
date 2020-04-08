import _ from 'lodash';
import { exch } from './utils';

function reverse<T>(array: T[]) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    exch(array, i++, j--);
  }
  return array;
}

test('should ', () => {
  const array = [1, 2, 3, 4];
  expect(_.reverse(array)).toEqual([4, 3, 2, 1]);
  expect(array).toEqual([4, 3, 2, 1]);

  const otherArray = [1, 2, 3, 4];
  expect(reverse(otherArray)).toEqual([4, 3, 2, 1]);
  expect(otherArray).toEqual([4, 3, 2, 1]);
})
