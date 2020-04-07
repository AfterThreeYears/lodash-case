import _ from 'lodash';

function last(array: any[]) {
  return array != null && array.length ? array[array.length - 1] : undefined;
}

test('should ', () => {
  expect(_.last([])).toEqual(undefined);
  expect(_.last([1, 2])).toEqual(2);

  expect(last([])).toEqual(undefined);
  expect(last([1, 2])).toEqual(2);
})
