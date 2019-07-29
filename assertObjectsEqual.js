const eqArrays = function(actual, expected){

  if(typeof actual === "object"){
    for(let i = 0; i < actual.length; i++){
      if(actual[i] !== expected[i]){     
        return false;
      } else {
        return true;
      }
    }
  }

  if(actual !== expected){
    return false;
  } else if(actual === expected){
    return true
  }
  return false;
}

const eqObjects = function(object1, object2){
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }

  for(let key of Object.keys(object1)){
    if(Array.isArray(object1[key] && Array.isArray(object2[key]))){
      return eqArrays(object1[key],object2[key]);
    }

    if(object1[key] === object2[key]){
      return true;
    } 
  }

  return false;
}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if(eqObjects(actual,expected)){
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)}  ===  ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertObjectsEqual(ab,ba);

module.exports = assertObjectsEqual;




