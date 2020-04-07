import _ from 'lodash';

function indexOf<T = any>(array: T[], value: T, fromIndex: number = 0) {
  let i = fromIndex;

  while (i < array.length) {
    if (array[i] === value) {
      return i;
    }
    i++;
  }
}

test('should ', () => {
  expect(_.indexOf([1, 2, 1, 2], 2)).toEqual(1);
  expect(_.indexOf([1, 2, 1, 2], 2, 2)).toEqual(3);

  expect(indexOf([1, 2, 1, 2], 2)).toEqual(1);
  expect(indexOf([1, 2, 1, 2], 2, 2)).toEqual(3);
})
