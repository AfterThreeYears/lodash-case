import _ from 'lodash';

function union<T>(array: T[], other: T[]) {
  const object: { [key: string]: T } = {};
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const key = (element).toString();
    if (_.isUndefined(object[key])) {
      result.push(element);
    }
    object[key] = element;
  }

  for (let i = 0; i < other.length; i++) {
    const element = other[i];
    const key = (element).toString();
    if (_.isUndefined(object[key])) {
      result.push(element);
    }
    object[key] = element;
  }

  return result;
}

test('should ', () => {
  expect(_.union([2], [1, 2])).toEqual([2, 1]);

  expect(union([2], [1, 2])).toEqual([2, 1]);
})
