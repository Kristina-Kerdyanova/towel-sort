
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []; 
  if(matrix === undefined) {
    return result;
  }
  
  for(let i = 0; i<matrix.length; i++) {
    let arr = [];
    if(i % 2 === 0) {
      arr = matrix[i]; 
    } else {
      arr = matrix[i].reverse(); 
    }

    for(let i = 0; i<arr.length; i++) {
      result.push(arr[i]);
    }
  }
  return result;
}
