function mergeSort(array) {
  let middle = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle);

  if (array.length === 1){
    return array;
  }

  return mergeArray(mergeSort(leftArray), mergeSort(rightArray));
}

function mergeArray(leftArray, rightArray) {
  let sorted = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] > rightArray[0]){
      sorted.push( rightArray.shift() );
    }
    else {
      sorted.push( leftArray.shift() );
    }
  }
  while (leftArray.length) {
    sorted.push( leftArray.shift() );
  }
  while (rightArray.length) {
    sorted.push( rightArray.shift() );
  }
  return sorted;
}


module.exports = mergeSort, mergeArray;