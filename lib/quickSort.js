function quickSort(array){
  if (array.length <= 1 ) {
    return array;
  }
  
  let pivot = array.pop();
  let lesser = [];
  let greater = [];
  
  array.forEach((number) => { 
    if (number >= pivot) {
      greater.push(number)
    } else {
      lesser.push(number)
    }
  });
  
  return [ ...quickSort(lesser), pivot, ...quickSort(greater) ]
}

module.exports = quickSort;