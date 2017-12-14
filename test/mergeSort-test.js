const { expect } = require('chai');

const mergeSort = require('../lib/mergeSort.js');

const generateRandomArray = require('./gen-array.js');
const generateRandomLetters = require('./gen-letters.js');
const checkSort = require('./check-sort.js');

describe('mergeSort', function () {
  it('is a function', () => {
    expect(mergeSort).to.be.a('function');
  })

  it('should sort an array of 5 numbers', () => {
    let arrayOfFive = [ 4, 5, 3, 1, 2 ]
    expect(checkSort(arrayOfFive)).to.equal(false);
    let sortedArray = mergeSort(arrayOfFive);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of 5,000 numbers', () => {
    let arrayOfFiveK = generateRandomArray(5000);
    expect(checkSort(arrayOfFiveK)).to.equal(false);
    let sortedArray = mergeSort(arrayOfFiveK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of 100,000 numbers', () => {
    let arrayOfTenK = generateRandomArray(100000);
    expect(checkSort(arrayOfTenK)).to.equal(false);
    let sortedArray = mergeSort(arrayOfTenK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of letters', () => {
    let arrayOfLetters = generateRandomLetters(1000);
    expect(checkSort(arrayOfLetters)).to.equal(false);
    let sortedArray = mergeSort(arrayOfLetters);
    expect(checkSort(sortedArray)).to.equal(true);
  })

  it('should sort an array of negative numbers', () => {
    let arrayOfOneK = generateRandomArray(1000, -1);
    expect(checkSort(arrayOfOneK)).to.equal(false);
    let sortedArray = mergeSort(arrayOfOneK);
    expect(checkSort(sortedArray)).to.equal(true);
  })

})