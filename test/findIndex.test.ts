import _, { isFunction, isString, isObject } from 'lodash';

type predicate<T> = ((o: T) => boolean) | T | [keyof T, T[keyof T]] | (keyof T);

function findIndex<T = any>(array: T[], predicate: predicate<T>, fromIndex: number = 0) {
  let index = -1;
  for (let i = fromIndex; i < array.length; i++) {
    const element = array[i];
    if (
      (isFunction(predicate) && predicate(element))
      || (Array.isArray(predicate) && element[predicate[0]] === predicate[1])
      || (isObject(predicate) && _.isEqual(element, predicate))
      || (isString(predicate) && element[predicate as string])
    ) {
      index = i;
      break;
    }
  }

  return index;
}

test.only('should ', () => {
  interface User {
    user: string;
    active: boolean;
  }

  const users = [
    { user: 'barney',  active: false },
    { user: 'fred',    active: false },
    { user: 'pebbles', active: true }
  ];
  expect(_.findIndex(users, function(o) { return o.user == 'barney'; })).toEqual(0);
  expect(_.findIndex(users, { user: 'fred', active: false })).toEqual(1);
  expect(_.findIndex(users, ['active', false])).toEqual(0);
  expect(_.findIndex(users, 'active')).toEqual(2);

  expect(findIndex<User>(users, function(o) { return o.user == 'barney'; })).toEqual(0);
  expect(findIndex<User>(users, { user: 'fred', active: false })).toEqual(1);
  expect(findIndex(users, ['active', false])).toEqual(0);
  expect(findIndex(users, 'active')).toEqual(2);
});
