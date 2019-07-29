const tail = arr => {
  let result = [];
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(tail([]));

module.exports = tail;
