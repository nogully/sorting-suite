function checkSort(array){
  let ifSorted = true;
  
  for(let i = 0; i < array.length; i++){
    if (array[i] > array[i + 1]){
      ifSorted = false;
    }
  }
  return ifSorted;
} 



module.exports = checkSort;
