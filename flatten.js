const eqArrays = function(actual, expected) {

  let result = true;

  if (actual.length !== expected.length) {
    result = false;
  } else if (actual === expected) {
    result = true;
  }

  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      result = false;
    }
  }
  return result;

};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1}  ===  ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const flatten = (input) => {
  
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let result = [];

  if(!input.length){
    return result;
  }

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === "object") {
      for (let j = 0; j < input[i].length; j++) {
        arr2.push(input[i][j]);
      }
    } else {
      arr1.push(input[i]);
    }
  }

  arr3 = arr1.concat(arr2);
  result = arr3.sort((a, b) => {
    return a - b;
  });

  return result;
};

module.exports = flatten;
// console.log(flatten([]));
// flatten([1, 2, [3, 4], 5, [6]]);

// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
