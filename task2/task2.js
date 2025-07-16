const input = [1, 4, 2, 3, 5];

const sumOfLargest = () => {
  input.sort();
  return input[input.length - 1] + input[input.length - 2];
};

console.log(sumOfLargest());
