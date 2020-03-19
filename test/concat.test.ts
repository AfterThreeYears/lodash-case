import _ from 'lodash';

function concat(array: any[], ...values: any[]) {
  const result = [...array];

  for (let i = 0; i < values.length; i++) {
    const element = values[i];
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
  const array = [1];
  expect(_.concat<number | number[]>(array, 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);

  expect(concat(array, 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
})
