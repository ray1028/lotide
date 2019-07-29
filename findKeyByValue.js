const eqArrays = function(actual, expected) {
  if (typeof actual === "object") {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      } else {
        return true;
      }
    }
  }

  if (actual !== expected) {
    return false;
  } else if (actual === expected) {
    return true;
  }
  return false;
};

const assertEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅Assertion Passed: ${arr1}  ===  ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const findKeyByValue = (objectToFind, show) => {
  let result;

  Object.entries(objectToFind).forEach(([key, val]) => {
    if (val === show) {
      result = key;
    }
  });

  return result;
};

module.exports = findKeyByValue;
