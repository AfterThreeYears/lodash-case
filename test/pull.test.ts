import _ from 'lodash';

function pull<T>(array: T[], ...values: T[]) {
  const reulst: T[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!~values.indexOf(element)) {
      reulst.push(element);
    }
  }
  return reulst;
}

test('should ', () => {
  const array = ['a', 'b', 'c', 'a', 'b', 'c'];
  expect(_.pull(array, 'a', 'c')).toEqual(['b', 'b']);

  expect(pull(array, 'a', 'c')).toEqual(['b', 'b']);
})

