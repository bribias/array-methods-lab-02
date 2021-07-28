import { map } from '../map-array';
import { boopFilter } from '../filter';
import { reduce } from '../reduce';
import { everyArr } from '../every-array';

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

describe('reduce', () => {
  it('takes an array, callback. and initial value and returns the reduced accumulator', () => {
    const arr = [1, 2, 3, 4];
    const callback = (acc, item) => acc + item;
    const result = reduce(arr, callback, 0);
    expect(result).toEqual(10);
  });

  describe('every array method', () => {
    it('takes an array and a callback and returns true if all callbacks are true', () => {
      const callBackFunction = item => item > 5;
      const arr = [1, '', 3, '', 5, '', 7];
      const actual = everyArr(arr, callBackFunction);

      expect(actual).toEqual(false);
    });
  });
});
