import _ from 'lodash';

function fromPairs<T = unknown>(pairs: [string, T][]) {
  const result: Partial<{ [key: string]: T }> = {};

  for (let i = 0; i < pairs.length; i++) {
    const [key, value] = pairs[i];
    result[key] = value;
  }

  return result;
}

test('should ', () => {
  expect(_.fromPairs([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 });
  expect(fromPairs<number>([['a', 1], ['b', 2]])).toEqual({ a: 1, b: 2 });
})
