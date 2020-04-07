import _ from 'lodash';

function join(array: string[], separator: string = '~') {
  let result = '';
  let i = 0;
  while (i < array.length) {
    result += `${array[i]}${i < array.length - 1 ? separator : ''}`;
    i++;
  }
  return result;
}

test('should ', () => {
  expect(_.join(['a', 'b', 'c'], '~')).toBe('a~b~c');

  expect(join(['a', 'b', 'c'], '~')).toBe('a~b~c');
});

