const eqArrays = require('./eqArrays');

// const eqArrays = function(actual, expected){

//   let result = true;

//   if(actual.length !== expected.length){
//     result = false;
    
//   }

//   for(let i = 0; i < actual.length; i++){
//     if(actual[i] !== expected[i]){
//       result = false;
//     }
//   }

//   return result;
  
// }

const assertArraysEqual = function(arr1, arr2){
  if(eqArrays(arr1,arr2)){
    console.log(`✅✅✅Assertion Passed: ${arr1}  ===  ${arr2}`);
  } else{
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

module.exports = assertArraysEqual;




