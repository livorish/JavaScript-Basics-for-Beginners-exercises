//function countOccurrences(array, searchElement) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//      if (array[i] === searchElement)
//         count++;
//   }
//
//   return count;
//
//}

function countOccurrences(array, searchElement) {
   return array.reduce((accumulator, current) => {
      const occurrence = (current === searchElement) ? 1 : 0;
      return accumulator + occurrence;
   }, 0);
}


const numbers = [1, 2, 3, 2, 4, 1, 1]
const count = countOccurrences(numbers, 2)
console.log(count);
