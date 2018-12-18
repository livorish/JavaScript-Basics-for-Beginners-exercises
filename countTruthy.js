function countTruthy(array){
   let i = 0;
   for (key of array){
      (key)? i++ : 0; 
   }
   return i;
}

var count = countTruthy([45, 'cinema', false, 0, '', undefined, null, NaN, 0, true]);  
console.log(count)