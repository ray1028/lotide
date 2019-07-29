const eqArrays = function(actual, expected) {
  if(actual.length !== expected.length) {
    return false;
  }

  if(actual.length === 0 && expected.length === 0) {
    return true;
  }

  if (Array.isArray(actual[0]) && Array.isArray(expected[0])) {
    return eqArrays(actual[0], expected[0]) && eqArrays(actual.splice(1), expected.splice(1));
  } else {
    return (actual[0] === expected[0]) && eqArrays(actual.splice(1), expected.splice(1));
  }
}

module.exports = eqArrays;


