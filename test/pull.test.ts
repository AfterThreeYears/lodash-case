import _ from 'lodash';

export default function pull<T>(array: T[], ...values: T[]) {
  for (let i = 0; i < array.length; i++) {
    if (~values.indexOf(array[i])) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

test('should ', () => {
  const array = ['a', 'b', 'c', 'a', 'b', 'c'];
  _.pull(array, 'a', 'c');
  expect(array).toEqual(['b', 'b']);

  const otherArray = ['a', 'b', 'c', 'a', 'b', 'c'];
  pull(otherArray, 'a', 'c');
  expect(otherArray).toEqual(['b', 'b']);
})

