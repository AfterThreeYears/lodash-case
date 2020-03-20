import _ from 'lodash';

function fill(array: any[], value: any, start: number = 0, end?: number) {
  const result = [];
  const realEnd = end || array.length;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (i >= start && i < realEnd) {
      result.push(value);
    } else {
      result.push(element);
    }
  }
  
  return result;
}

test('should ', () => {
  expect(_.fill([1, 2, 3], 'a')).toEqual(['a', 'a', 'a']);
  expect(_.fill(Array(3), 2)).toEqual([2, 2, 2]);
  expect(_.fill([4, 6, 8, 10], '*', 1, 3)).toEqual([4, '*', '*', 10]);

  expect(fill([1, 2, 3], 'a')).toEqual(['a', 'a', 'a']);
  expect(fill(Array(3), 2)).toEqual([2, 2, 2]);
  expect(fill([4, 6, 8, 10], '*', 1, 3)).toEqual([4, '*', '*', 10]);
});
