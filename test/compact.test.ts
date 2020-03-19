import _ from 'lodash';

function compact(array: any[]) {
  return array.filter((item => {
    return !(
      item === false
      || item === ''
      || item === 0
      || item === null
      || item === undefined
      || Number.isNaN(item)
    );
  }));
}

test('should ', () => {
  expect(_.compact([0, 1, false, 2, '', 3, null, NaN, undefined])).toEqual([1, 2, 3]);

  expect(compact([0, 1, false, 2, '', 3, null, NaN, undefined])).toEqual([1, 2, 3]);
})
