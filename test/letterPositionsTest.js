const expect = require('chai').expect
const letterPositions = require('../letterPositions');
describe('#letterPositions', () => {
 it('should return an object', () => {
   expect(letterPositions('lighthouse')).to.be.an('object');
 });
 it('should return an empty object if we are  apssing an empty string', () => {
   expect(letterPositions('')).to.be.empty;
 });
 it('should return a correct key value if we are passing in the right arguments', () => {
   expect(letterPositions('lighthouse in the house')).to.deep.include({h: [ 3, 5, 15, 18 ]});
 });
 it('should return a correct full object if we are passing in the right arguments', () => {
   expect(letterPositions('lighthouse in the house')).to.deep.equal({ l: [ 0 ],
     i: [ 1, 11 ],
     g: [ 2 ],
     h: [ 3, 5, 15, 18 ],
     t: [ 4, 14 ],
     o: [ 6, 19 ],
     u: [ 7, 20 ],
     s: [ 8, 21 ],
     e: [ 9, 16, 22 ],
     n: [ 12 ] });
 });
});