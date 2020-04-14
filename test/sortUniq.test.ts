import _ from 'lodash';

function sortedUniq<T>(array: T[]) {
  let i = 0;
  const result: T[] = [];
  while (i < array.length) {
    if (array[i] !== array[i + 1]) {
      result.push(array[i]);
    }
    i++;
  }
  return result;
}

test('should ', () => {
  const array = [1, 1, 2];
  expect(_.sortedUniq(array)).toEqual([1, 2]);
  expect(array).toEqual(array);

  expect(sortedUniq(array)).toEqual([1, 2]);
  expect(array).toEqual(array);
})
