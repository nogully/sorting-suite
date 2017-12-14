const { expect } = require('chai');

const insertionSort = require('../lib/insertionSort.js');

const generateRandomArray = require('./gen-array.js');
const generateRandomLetters = require('./gen-letters.js');
const checkSort = require('./check-sort.js');

describe('insertionSort', function () {
  it('is a function', () => {
    expect(insertionSort).to.be.a('function');
  })

  it('should sort an array of 5 numbers', () => {
    let arrayOfFive = [ 4, 5, 3, 1, 2 ]
    expect(checkSort(arrayOfFive)).to.equal(false);
    let sortedArray = insertionSort(arrayOfFive);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of 5,000 numbers', () => {
    let arrayOfFiveK = generateRandomArray(5000);
    expect(checkSort(arrayOfFiveK)).to.equal(false);
    let sortedArray = insertionSort(arrayOfFiveK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of 20,000 numbers', () => {
    let arrayOfTwentyK = generateRandomArray(20000);
    expect(checkSort(arrayOfTwentyK)).to.equal(false);
    let sortedArray = insertionSort(arrayOfTwentyK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of letters', () => {
    let arrayOfLetters = generateRandomLetters(1000);
    expect(checkSort(arrayOfLetters)).to.equal(false);
    let sortedArray = insertionSort(arrayOfLetters);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of negative numbers', () => {
    let arrayOfOneK = generateRandomArray(1000, -1);
    expect(checkSort(arrayOfOneK)).to.equal(false);
    let sortedArray = insertionSort(arrayOfOneK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

})