import _, { isFunction, isString } from 'lodash';

function differenceBy(array: any[], ...values: any[]) {
  const result = [];
  const iteratee = values[values.length - 1];
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
      if (
        isFunction(iteratee) && (iteratee(combinValues[j]) === iteratee(element))
        || isString(iteratee) && (combinValues[j][iteratee] === element[iteratee])
      ) {
        isHas = true;
        break;
      }
    }
    if (!isHas) result.push(element);
  }

  return result;
}

test('should ', () => {
  expect(_.differenceBy([2.1, 1.2], [2.3, 3.4], [7], Math.floor)).toEqual([1.2]);
  expect(_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')).toEqual([{ 'x': 2 }]);

  expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2]);
  expect(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')).toEqual([{ 'x': 2 }]);
  
})
