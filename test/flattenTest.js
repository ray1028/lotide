const expect = require("chai").expect;

describe("#flatten", () => {
  const flatten = require("../flatten");
  it('should return an array', () => {
    expect(flatten([1, 2, [3, 4], 5, [6]])).to.be.an('array');
  })

  it('should return a correct length of an array for the array passed', () => {
    expect(flatten([1, 2, [3, 4], 5, [6],[[7]],8])).to.have.lengthOf(8);
  })

  it('should return an empty array when passed in an empty array', () => {
    expect(flatten([])).to.be.an('array').that.is.empty;
  })
});
