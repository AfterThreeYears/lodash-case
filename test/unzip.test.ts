import _ from 'lodash';

function unzip<T = any>(arrays: T[][]) {
  const result: T[][] = [];
  for (let i = 0; i < arrays[0].length; i++) {
    result.push([arrays[0][i], arrays[1][i]]);
  }
  return result;
}

test('should ', () => {
  expect(_.unzip([['a', 1, true], ['b', 2, false]])).toEqual([['a', 'b'], [1, 2], [true, false]]);
  
  expect(unzip([['a', 1, true], ['b', 2, false]])).toEqual([['a', 'b'], [1, 2], [true, false]]);
})
