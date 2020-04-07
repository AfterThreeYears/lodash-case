import _ from "lodash"

function nth<T>(array: T[], n: number = 0) {
  let index = n < 0 ? array.length + n : n;
  return array[index];
}

test('should ', () => {
  expect(_.nth(['a', 'b', 'c', 'd'], 1)).toBe('b');
  expect(_.nth(['a', 'b', 'c', 'd'], -2)).toBe('c');

  expect(nth(['a', 'b', 'c', 'd'], 1)).toBe('b');
  expect(nth(['a', 'b', 'c', 'd'], -2)).toBe('c');
});
