const { expect } = require('chai');

const quickSort = require('../lib/quickSort.js');

const generateRandomArray = require('./gen-array.js');
const generateRandomLetters = require('./gen-letters.js');
const checkSort = require('./check-sort.js');

describe('quickSort', function () {
  it('is a function', () => {
    expect(quickSort).to.be.a('function');
  })

  it('should sort an array of 5 numbers', () => {
    let arrayOfFive = [ 4, 5, 3, 1, 2 ]
    expect(checkSort(arrayOfFive)).to.equal(false);
    let sortedArray = quickSort(arrayOfFive);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of 5,000 numbers', () => {
    let arrayOfFiveK = generateRandomArray(5000);
    expect(checkSort(arrayOfFiveK)).to.equal(false);
    let sortedArray = quickSort(arrayOfFiveK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of 60,000 numbers', () => {
    let arrayOfSixtyK = generateRandomArray(60000);
    expect(checkSort(arrayOfSixtyK)).to.equal(false);
    let sortedArray = quickSort(arrayOfSixtyK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of letters', () => {
    let arrayOfLetters = generateRandomLetters(1000);
    expect(checkSort(arrayOfLetters)).to.equal(false);
    let sortedArray = quickSort(arrayOfLetters);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of negative numbers', () => {
    let arrayOfOneK = generateRandomArray(1000, -1);
    expect(checkSort(arrayOfOneK)).to.equal(false);
    let sortedArray = quickSort(arrayOfOneK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

})