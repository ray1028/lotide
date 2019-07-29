const eqArrays = function(actual, expected) {
  if (actual !== expected) {
    return false;
  } else if (actual === expected) {
    return true;
  }

  if (typeof actual === "object") {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }

  return true;
};

const assertEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1}  ===  ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

let str = "lighthouse in the house";

const countLetter = input => {
  let strNoSpace = input.split(" ").join("");
  let result = {};

  for (let item of strNoSpace) {
    if (!result[item]) {
      result[item] = 1;
    } else {
      result[item] += 1;
    }
  }

  return result;
};

module.exports = countLetter;
