import _ from 'lodash';

function remove<T>(array: T[], predicate: (n: T) => any = _.identity) {
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (predicate(element)) {
      result.push(element);
      array.splice(i, 1);
      i--;
    }
  }
  return result;
}

test('should ', () => {
  const array = [1, 2, 3, 4];
  const evens = _.remove(array, function(n) {
    return n % 2 == 0;
  });
  expect(array).toEqual([1, 3]);
  expect(evens).toEqual([2, 4]);

  const otherArray = [1, 2, 3, 4];
  const otherEvens = remove(otherArray, (n) => {
    return n % 2 == 0;
  });
  expect(otherArray).toEqual([1, 3]);
  expect(otherEvens).toEqual([2, 4]);
})
