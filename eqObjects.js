
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

const assertEqual = function(arr1, arr2){
  if(eqArrays(arr1,arr2)){
    console.log(`✅✅✅Assertion Passed: ${arr1}  ===  ${arr2}`);
  } else{
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
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
    
    if(!Array.isArray(object1[key])){
      return eqObjects(object1[key], object2[key]);
    }
  }

  return false;
}

module.exports = eqObjects;

// console.log(
//     eqObjects(
//       { a: { z: 1 }, b: 2 }, 
//       { a: { z: 1 }, b: 2 })
//     ) // => true

// console.log(
//     eqObjects(
//       { a: { y: 0, z: 1 }, b: 2 }, 
//       { a: { z: 1 }, b: 2 })
//       )// => false

// console.log(
//     eqObjects(
//       { a: { y: 0, z: 1 }, b: 2 }, 
//       { a: 1, b: 2 })) // => false

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects({ y: 0, z: 1 }, { y: 0, z: 1 })); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, ba)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false
