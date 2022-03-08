// 1
const sumTwoSmallestNumbers = (...args) => {
  if (args.length < 2) {
    console.error("Error");
    return;
  }
  const sortedArray = args.sort((a, b) => a - b);
  const firstElement = sortedArray[0];
  const secondElement = sortedArray[1];
  const sum = firstElement + secondElement;
  return sum;
};

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

// 2
const createCalculator = (initialValue) => {
  let value = initialValue;

  return {
    sum: function (newValue) {
      value = value + newValue;
      return value;
    },
    mult: function (newValue) {
      value = value * newValue;
      return value;
    },
    sub: function (newValue) {
      value = value - newValue;
      return value;
    },
    div: function (newValue) {
      value = value / newValue;
      return value;
    },
  };
};

const calc = createCalculator(10);

// console.log(calc(5));
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
