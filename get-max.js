function getMax(array) {
   let max = 0;
   for (let i = 0; i <= array.length; i++) {
      if (array.length === 0) {
         return undefined;
      } else if (array[i] > max) {
         max = array[i];
      }
   }
   return max;
}


const numbers = [1];

const max = getMax(numbers);

console.log(max);
