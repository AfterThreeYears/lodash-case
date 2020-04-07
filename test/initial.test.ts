import _ from 'lodash';

function initial<T>(array: T[]) {
  const result: T[] = [];
  for (let i = 0; i < array.length - 1; i++) {
    const element = array[i];
    result.push(element);
  }
  return result;
}

test('should ', () => {
  expect(_.initial([1, 2, 3])).toEqual([1, 2]);

  expect(initial([1, 2, 3])).toEqual([1, 2]);
});
