import _ from 'lodash';

function difference(array: any[], ...values: any[]) {
  const result = [];
  const combinValues = [];

  for (let i = 0; i < values.length; i++) {
    const element = values[i];
    combinValues.push(...element);
  }
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let isHas = false;
    for (let j = 0; j < combinValues.length; j++) {
      if (combinValues[j] === element) {
        isHas = true;
        break;
      }
    }
    if (!isHas) result.push(element);
  }

  return result;
}

test('should ', () => {
  expect(_.difference([1, 2, 4], [1, 3], [2, 1])).toEqual([4]);

  expect(difference([1, 2, 4], [1, 3], [2, 1])).toEqual([4]);
})
