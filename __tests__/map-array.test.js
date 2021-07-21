import map from '../map-array';

describe('map', () => {
  it('takes an an array and modifies with a callback', () => {
    const callback = (number) => number + 1;
    const actual = map([2, 3, 6], callback);
    const expected = [3, 4, 7];
      
    expect(actual).toEqual(expected);
  });
});
