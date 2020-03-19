import _, { isFunction, isString } from 'lodash';

function differenceWith(array: any[], ...values: any[]) {
  const result = [];
  const compartor = values[values.length - 1];
  const realValues = values.slice(0, values.length - 1);
  const combinValues = [];

  for (let i = 0; i < realValues.length; i++) {
    const element = realValues[i];
    combinValues.push(...element);
  }
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let isHas = false;
    for (let j = 0; j < combinValues.length; j++) {
      if (compartor(element, combinValues[j])) {
        isHas = true;
        break;
      }
    }
    if (!isHas) result.push(element);
  }

  return result;
}

test('should ', () => {
  expect(_.differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual)).toEqual([{ 'x': 2, 'y': 1 }]);

  expect(differenceWith([{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }], [{ 'x': 1, 'y': 2 }], _.isEqual)).toEqual([{ 'x': 2, 'y': 1 }]);
  
})
