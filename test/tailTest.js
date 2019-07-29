const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("should return true if the return string is the same", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), [
      "Lighthouse",
      "Labs"
    ]);
  });

  it("should return true if the return result is the same as expected", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("should return true if a empty array is passed into the function", () => {
    assert.isEmpty(tail([]));
  });

  it("should return false if the return result is not the same as expected", () => {
    assert.notDeepEqual(tail(["Yo Yo", "Lighthouse", "Labs"], ["Yo", "Labs"]));
  });
});

const result2 = tail([1, 2, 3, 4]);
assertEqual(result2, [2, 3, 4]); // => will always fail!

