const { expect } = require('chai');

const bubbleSort = require('../lib/bubbleSort.js')

const generateRandomArray = require('./gen-array.js');
const generateRandomLetters = require('./gen-letters.js');
const checkSort = require('./check-sort.js');

describe('bubbleSort', function () {
  it('is a function', () => {
    expect(bubbleSort).to.be.a('function');
  })

  it('should sort an array of 5 numbers', () => {
    let arrayOfFive = [ 4, 5, 3, 1, 2 ]
    expect(checkSort(arrayOfFive)).to.equal(false);
    let sortedArray = bubbleSort(arrayOfFive);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of 5,000 numbers', () => {
    let arrayOfFiveK = generateRandomArray(5000);
    expect(checkSort(arrayOfFiveK)).to.equal(false);
    let sortedArray = bubbleSort(arrayOfFiveK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of 10,000 numbers', () => {
    let arrayOfTenK = generateRandomArray(10000);
    expect(checkSort(arrayOfTenK)).to.equal(false);
    let sortedArray = bubbleSort(arrayOfTenK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of letters', () => {
    let arrayOfLetters = generateRandomLetters(1000);
    expect(checkSort(arrayOfLetters)).to.equal(false);
    let sortedArray = bubbleSort(arrayOfLetters);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of negative numbers', () => {
    let arrayOfOneK = generateRandomArray(1000, -1);
    expect(checkSort(arrayOfOneK)).to.equal(false);
    let sortedArray = bubbleSort(arrayOfOneK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

})