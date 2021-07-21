import { map } from '../map-array';

describe('map', () => {
  it('takes an array and modifies with a callback', () => {
    const ogArray = [1, 2, 3, 4, 5];
    const callback = (item) => item * 2;
    const result = map(ogArray, callback);
      
    expect(result).toEqual([2, 4, 6, 8, 10]);
    expect(ogArray).toEqual([1, 2, 3, 4, 5]);
  });
});
