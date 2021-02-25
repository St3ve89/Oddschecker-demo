export const sum = (obj) => {
  let sum = 0;
  for (let el in obj) {
    if (obj.hasOwnProperty(el)) {
      sum += parseFloat(obj[el]);
    }
  }
  return sum;
};

export const getMax = (arr) => {
  arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
};
