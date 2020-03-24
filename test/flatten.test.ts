import _ from 'lodash';

function flatten(array: any[]) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      for (let j = 0; j < element.length; j++) {
        result.push(element[j]);
      }
    } else {
      result.push(element);
    }
  }
  return result;
}

test('should ', () => {
  expect(_.flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);

  expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
})
