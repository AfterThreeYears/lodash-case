import _ from 'lodash';

function tail<T>(array: T[]) {
  const result: T[] = [];
  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

test('should ', () => {
  expect(_.tail([1, 2, 3])).toEqual([2, 3]);

  expect(tail([1, 2, 3])).toEqual([2, 3]);
})
