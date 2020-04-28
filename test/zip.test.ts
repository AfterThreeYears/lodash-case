import _ from 'lodash';

function zip(...arrays: any[][]) {
  const result: [any[], any[]] = [[], []];
  for (let i = 0; i < arrays.length; i++) {
    result[0].push(arrays[i][0]);
    result[1].push(arrays[i][1]);
  }
  return result;
}

test('should ', () => {
 expect(_.zip(['fred', 'barney'], [30, 40], [true, false])).toEqual([['fred', 30, true], ['barney', 40, false]]);
 
 expect(zip(['fred', 'barney'], [30, 40], [true, false])).toEqual([['fred', 30, true], ['barney', 40, false]]);
})
