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

const str = "lighthouse in the house";

const letterPositions = function(sentence) {
  const results = {};
  let len = 0;

  for (let item of sentence) {
    if (!results[item]) {
      if (item !== " ") {
        results[item] = [];
        results[item].push(sentence.indexOf(item));
      }
    } else {
      len = results[item].length - 1;
      let num = results[item][len];
      results[item].push(sentence.indexOf(item, num + 1));
    }
  }

  return results;
};

module.exports = letterPositions;

