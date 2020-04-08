import _ from 'lodash';

function slice<T>(array: T[], start = 0, end = array.length) {
  const result: T[] = [];
  for (let i = start; i < end; i++) {
    const element = array[i];
    result.push(element);
  }
  return result;
}

test('should ', () => {
  const array = [1, 2, 3, 4];
  expect(_.slice(array, 1, 3)).toEqual([2, 3]);
  expect(_.slice(array, 1)).toEqual([2, 3, 4]);
  expect(array).toEqual(array);

  const otherArray = [1, 2, 3, 4];
  expect(slice(otherArray, 1, 3)).toEqual([2, 3]);
  expect(slice(otherArray, 1)).toEqual([2, 3, 4]);
  expect(otherArray).toEqual(otherArray);
})
