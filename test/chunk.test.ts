import _ from 'lodash';


function chunk(array: any[], size: number) {
  const length = Math.ceil(array.length / size);
  const result = Array.from(new Array(length)).map(() => []);

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result[Math.floor(i / size)].push(element); 
  }

  return result;
}

test('should ', () => {
  expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);

  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
})
