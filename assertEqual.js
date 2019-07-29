// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
//   } 
//   else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

const assertEqual = function(actual, expected) {
  // if (actual.length !== expected.length) {
  //   console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  //   return false;
  // }

  if (
    typeof actual === "object" &&
    typeof expected === "object" &&
    actual.length > 1
  ) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
        return false;
      } else {
        console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
        return true;
      }
    }
  } else {
    if (actual === expected) {
      console.log(`✅✅✅Assertion Passed: ${actual}  ===  ${expected}`);
      return true;
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
      return false;
    }
  }
};


module.exports = assertEqual;

