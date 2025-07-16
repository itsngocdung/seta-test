let input = ["a", "ab", "abc", "di", "def", "gh"];

const findfrequent = () => {
  let listlen = [];
  let max = 0,
    len,
    freq = 0;

  for (let i = 0; i < input.length; i++) {
    listlen.push(input[i].length);
  }

  listlen.sort();

  for (let i = 0; i < listlen.length; i++) {
    if (listlen[i] === listlen[i + 1]) {
      freq++;
    } else {
      freq = 0;
    }

    if (freq > max) {
      max = freq;
      len = listlen[i];
    }
  }

  let result = input.filter((item) => item.length === len);
  return result;
};

console.log(findfrequent());
