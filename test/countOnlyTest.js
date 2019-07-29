const expect = require("chai").expect;

describe("#countOnly", () => {
  const countOnly = require("../countOnly");
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it("should return as an object", () => {
    expect(
      countOnly(firstNames, { Jason: true, Karima: true, Fang: true })
    ).to.be.an("object");
  });

  it("should return undefined if the pass argument has a value of false", () => {
    expect(countOnly(firstNames, { Jason: false })).to.be.empty;
  });

  it("should return the correct object when passed an true parameters", () => {
    expect(countOnly(firstNames, { "Jason": true, "Karima": false })).to.deep.equal({Jason: 1});
  });
});
