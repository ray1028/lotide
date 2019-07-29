const eqArrays = function(actual, expected){

  let result = true;

  if(actual.length !== expected.length){
    result = false;
    
  }

  for(let i = 0; i < actual.length; i++){
    if(actual[i] !== expected[i]){
      result = false;
    }
  }

  return result;
  
}

const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1,arr2)){
    console.log(`✅✅✅Assertion Passed: ${arr1}  ===  ${arr2}`);
  } else{
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);
// assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

