import _ from 'lodash';

function head(array: any[]) {
  return array != null && array.length ? array[0] : undefined;
}

test('should ', () => {
  expect(_.head([])).toEqual(undefined);
  expect(_.head([1, 2])).toEqual(1);

  expect(head([])).toEqual(undefined);
  expect(head([1, 2])).toEqual(1);
})
