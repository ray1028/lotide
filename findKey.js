// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (objs, callback) => {
  for (let k of Object.keys(objs)) {
    if (callback(objs[k])) {
      return k;
    }
  }
};

module.exports = findKey;
