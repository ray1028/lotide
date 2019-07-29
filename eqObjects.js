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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key] && Array.isArray(object2[key]))) {
      return eqArrays(object1[key], object2[key]);
    }

    if (object1[key] === object2[key]) {
      return true;
    }

    if (!Array.isArray(object1[key])) {
      return eqObjects(object1[key], object2[key]);
    }
  }

  return false;
};

module.exports = eqObjects;

