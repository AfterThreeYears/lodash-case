import _, { isFunction, isString, isObject } from 'lodash';
import { predicate } from './findIndex.test';

function findLastIndex<T = any>(array: T[], predicate: predicate<T>, fromIndex: number = array.length - 1) {
  let i = fromIndex;

  while (i >= 0) {
    const element = array[i];
    if (
      (isFunction(predicate) && predicate(element))
      || (Array.isArray(predicate) && element[predicate[0]] === predicate[1])
      || (isObject(predicate) && _.isEqual(element, predicate))
      || (isString(predicate) && element[predicate as string])
    ) {
      return i;
    }
    i--;
  }

  return -1;
}

test.only('should ', () => {
  interface User {
    user: string;
    active: boolean;
  }

  const users = [
    { user: 'barney', active: true },
    { user: 'fred', active: false },
    { user: 'pebbles', active: false }
  ];
  expect(_.findLastIndex(users, function(o) { return o.user == 'pebbles'; })).toEqual(2);
  expect(_.findLastIndex(users, { user: 'barney', active: true })).toEqual(0);
  expect(_.findLastIndex(users, ['active', false])).toEqual(2);
  expect(_.findLastIndex(users, 'active')).toEqual(0);

  expect(findLastIndex(users, function(o) { return o.user == 'pebbles'; })).toEqual(2);
  expect(findLastIndex(users, { user: 'barney', active: true })).toEqual(0);
  expect(findLastIndex(users, ['active', false])).toEqual(2);
  expect(findLastIndex(users, 'active')).toEqual(0);

});
