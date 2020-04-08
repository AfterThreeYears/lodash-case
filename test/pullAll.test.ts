import _ from 'lodash';
import pull from './pull.test';

export default function pullAll<T>(array: T[], values: T[]) {
  pull(array, ...values);
}

test('should ', () => {
  const array = ['a', 'b', 'c', 'a', 'b', 'c'];
  _.pullAll(array, ['a', 'c']);
  expect(array).toEqual(['b', 'b']);

  const otherArray = ['a', 'b', 'c', 'a', 'b', 'c'];
  pullAll(otherArray, ['a', 'c']);
  expect(otherArray).toEqual(['b', 'b']);
})

