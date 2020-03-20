import _ from 'lodash';

function drop(array: any[], size: number = 1) {
  if (size > array.length) {
    return [];
  }

  const result = [];

  for (let i = size; i < array.length; i++) {
    const element = array[i];
    result.push(element);
  }

  return result;
}

test('should ', () => {
  expect(_.drop([1, 2, 3])).toEqual([2, 3]);
  expect(_.drop([1, 2, 3], 2)).toEqual([3]);
  expect(_.drop([1, 2, 3], 5)).toEqual([]);
  expect(_.drop([1, 2, 3], 0)).toEqual([1, 2, 3]);

  expect(drop([1, 2, 3])).toEqual([2, 3]);
  expect(drop([1, 2, 3], 2)).toEqual([3]);
  expect(drop([1, 2, 3], 5)).toEqual([]);
  expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
})
