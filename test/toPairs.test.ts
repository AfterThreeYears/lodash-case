import _ from 'lodash';

function toPairs(object: object) {
  const result: [string, unknown][] = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      result.push([key, element]);
    }
  }
  return result;
}

test('should ', () => {
  function Foo() {
    this.a = 1;
    this.b = 2;
  }
   
  Foo.prototype.c = 3;

  expect(_.toPairs(new Foo())).toEqual([['a', 1], ['b', 2]]);
  expect(toPairs(new Foo())).toEqual([['a', 1], ['b', 2]]);
});
