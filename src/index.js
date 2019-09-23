module.exports = function multiply(first, second) {
  let firstArray = first.split('').reverse();
  let secondArray = second.split('').reverse();
  let result = [];
  for (let i = 0; i < firstArray.length+secondArray.length; i++){
    result.push(0);
  }
  for (let i = 0; i < firstArray.length; i++){
    for (let j = 0; j < secondArray.length; j++){
      result[i+j] += firstArray[i] * secondArray[j];
    }
  }
  for (let i = 0; i < result.length - 1; i++){
    result[i+1] += Math.floor(result[i] / 10);
    result[i] = result[i] % 10;  
  }
  result = result.reverse();
  if (result[0] === 0){
    let removed = result.splice(0, 1);
  } 
  result = result.join("");
  return result;
}
