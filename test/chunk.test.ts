import _ from 'lodash';


function chunk(array: any[], size: number) {
  const result = [];
  let draft = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    draft.push(element);
    if (draft.length === size) {
      result.push(draft);
      draft = [];
    }
  }
  if (draft.length) result.push(draft);
  return result;
}

test('should ', () => {
  expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);

  expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
})
