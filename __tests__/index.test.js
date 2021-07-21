import { map } from '../map-array';
import { boopFilter } from '../filter';

describe('map', () => {
  it('takes an array and modifies with a callback', () => {
    const ogArray = [1, 2, 3, 4, 5];
    const callback = (item) => item * 2;
    const result = map(ogArray, callback);
      
    expect(result).toEqual([2, 4, 6, 8, 10]);
    expect(ogArray).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('filter array method', () => {
  it('takes an array and callback and creates new array', () => {
    const callBackFunction = item => item > 3;
    const arr = [1, 2, 3, 4,];
    const expected = [4];
    const actual = boopFilter(arr, callBackFunction);

    expect(expected).toEqual(actual);
  });
});
