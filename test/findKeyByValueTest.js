const expect = require('chai').expect;
const findKeyByValue = require('../findKeyByValue');
const bestTVShowsByGenre = {
 sci_fi: "The Expanse",
 comedy: "Brooklyn Nine-Nine",
 drama:  "The Wire",
 horror:  "Walking Dead",
 action:  "The 100",
 disappointing_ending:  "Game of Thrones",
};
describe('#findKeyByValue', () => {
 it('should return undefined if there are no show name provided', () => {
   expect(findKeyByValue(bestTVShowsByGenre, "")).is.undefined;
 });
 it('should return the right key, given keys value as an argument', () => {
   expect(findKeyByValue(bestTVShowsByGenre, "The Wire")).is.equal('drama');
 });
 it('should return the right key, given keys value as an argument which is not an array', () => {
   expect(findKeyByValue(bestTVShowsByGenre, "The Wire")).is.equal('drama').and.not.to.be.an('array');
 });
});