import _ from 'lodash';

function flattenDepth(array: any[], depth: number = 1) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    Array.isArray(element) && depth > 0
      ? result.push(...flattenDepth(element, depth - 1))
      : result.push(element);
  }
  return result;
}

test('should ', () => {
  const array = [1, [2, [3, [4]], 5]];
  expect(_.flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
  expect(_.flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);

  expect(flattenDepth(array, 1)).toEqual([1, 2, [3, [4]], 5]);
  expect(flattenDepth(array, 2)).toEqual([1, 2, 3, [4], 5]);
})
