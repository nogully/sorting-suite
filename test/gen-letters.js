function generateRandomLetters (count) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let myArray = [];
  
  for (let i = 0; i < count; i++) {
    let letterIndex = parseInt(Math.random() * letters.length);
    
    myArray.push(letters[letterIndex]);
  }
  return myArray;
}

module.exports = generateRandomLetters;