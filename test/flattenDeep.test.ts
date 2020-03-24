import _ from 'lodash';

function flattenDeep(array: any[]) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    Array.isArray(element) ? result.push(...flattenDeep(element)) : result.push(element);
  }
  return result;
}

test('should ', () => {
  expect(_.flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);

  expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);
})
