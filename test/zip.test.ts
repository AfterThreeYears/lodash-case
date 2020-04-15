import _ from 'lodash';

function zip(...arrays: any[]) {
  const result: [any[], any[]] = [[], []];
  for (let i = 0; i < arrays.length; i++) {
    const [val1, val2] = arrays[i];
    result[0].push(val1);
    result[1].push(val2);
  }
  return result;
}

test('should ', () => {
  expect(_.zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
  
  expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
})
