import _ from 'lodash';

function zipObject<T = any>(keys: string[], values: T[]) {
  const result: { [index: string]: T } = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i]; 
  }
  return result;
}

test('should ', () => {
  expect(_.zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });

  expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });
})
