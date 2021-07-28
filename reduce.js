export const reduce = (arr, callback, initialValue) => {
  let acc = initialValue === undefined ? 0 : initialValue;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element) {
      acc = callback(acc, element);
    }
  }
  return acc;
};
