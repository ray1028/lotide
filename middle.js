const middle = arr => {
  let midIndex = [];
  let result = [];

  if (arr.length <= 2) {
    return midIndex;
  }

  if (arr.length % 2 !== 0) {
    midIndex.push(Math.floor(arr.length / 2));
  } else {
    midIndex.push(Math.floor(arr.length / 2) - 1);
    midIndex.push(Math.floor(arr.length / 2));
  }

  for (let i = 0; i < midIndex.length; i++) {
    result.push(parseInt(arr[midIndex[i]]));
  }
  return result;
};

module.exports = middle;
