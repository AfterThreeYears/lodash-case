import _ from 'lodash';

function lastIndexOf<T = any>(array: T[], value: T, fromIndex: number = array.length - 1) {
  let i = fromIndex;

  while (i > 0) {
    if (array[i] === value) {
      return i;
    }
    i--;
  }
}

test('should ', () => {
  expect(_.lastIndexOf([1, 2, 1, 2], 2)).toEqual(3);
  expect(_.lastIndexOf([1, 2, 1, 2], 2, 2)).toEqual(1);

  expect(lastIndexOf([1, 2, 1, 2], 2)).toEqual(3);
  expect(lastIndexOf([1, 2, 1, 2], 2, 2)).toEqual(1);
})
