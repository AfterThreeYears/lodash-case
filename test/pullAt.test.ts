import _ from 'lodash';

export default function pullAll<T>(array: T[], indexes: number[]) {
  const result: T[] = [];
  for (let i = 0; i < indexes.length; i++) {
    result.push(array.splice(indexes[i] - i, 1)[0]);
  }
  return result;
}

test('should ', () => {
  const array = ['a', 'b', 'c', 'd'];
  const pulled = _.pullAt(array, [1, 3]); 
  expect(array).toEqual(['a', 'c']);
  expect(pulled).toEqual(['b', 'd']);

  const testArray = ['a', 'b', 'c', 'd'];
  const testPulled = _.pullAt(testArray, [1, 3]); 
  expect(testArray).toEqual(['a', 'c']);
  expect(testPulled).toEqual(['b', 'd']);
})

