import _ from 'lodash';

function dropRight(array: any[], size: number = 1) {
  if (size > array.length) {
    return [];
  }

  const result = [];

  for (let i = array.length - size - 1; i >= 0; i--) {
    const element = array[i];
    result.unshift(element);
  }

  return result;
}

test('should ', () => {
  expect(_.dropRight([1, 2, 3])).toEqual([1, 2]);
  expect(_.dropRight([1, 2, 3], 2)).toEqual([1]);
  expect(_.dropRight([1, 2, 3], 5)).toEqual([]);
  expect(_.dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);

  expect(dropRight([1, 2, 3])).toEqual([1, 2]);
  expect(dropRight([1, 2, 3], 2)).toEqual([1]);
  expect(dropRight([1, 2, 3], 5)).toEqual([]);
  expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
})
