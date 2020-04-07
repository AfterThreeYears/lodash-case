import _, { isFunction, isString } from 'lodash';
import { returnValue } from './utils';

export default function intersection<T = any>(array: T[], otherArray: T[], callback: Function | string = returnValue) {
  const otherCopyArray: T[] = [];
  for (let i = 0; i < otherArray.length; i++) {
    let element = otherArray[i];
    if (isFunction(callback)) {
      element = callback(element);
    }
    if (isString(callback)) {
      element = element[callback];
    }
    otherCopyArray.push(element);
  }

  const otherSet = new Set(otherCopyArray);
  const result: T[] = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (isFunction(callback)) {
      element = callback(element);
    }
    if (isString(callback)) {
      element = element[callback];
    }
    if (otherSet.has(element)) {
      otherSet.delete(element);
      result.push(array[i]);
    }
  }

  return result;
}

test('should ', () => {
  expect(_.intersection([2, 1, 2], [1, 2, 3, 2])).toEqual([2, 1]);

  expect(intersection([2, 1, 2], [1, 2, 3, 2])).toEqual([2, 1]);
});
