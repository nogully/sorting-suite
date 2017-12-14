function generateRandomArray(indexes, multiplier){
  let arrayOfNums = [];

  for(let i = 0; i < indexes; i++){
    let num = Math.floor(Math.random() * 100);

    if (multiplier === undefined) {
      arrayOfNums.push(num);
    } else if (multiplier === -1) {
      arrayOfNums.push(num * multiplier);
    }
    
  }
  return arrayOfNums;
}

module.exports = generateRandomArray;