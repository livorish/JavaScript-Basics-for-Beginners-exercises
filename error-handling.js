function countOccurrences(array, searchElement) {
   if (!Array.isArray(array)) {
      throw new Error("It is not array");
   }
   return array.reduce((accumulator, current) => {
      const occurrence = (current === searchElement) ? 1 : 0;
      return accumulator + occurrence;
   }, 0);
}

try {
   const numbers = [1, 2, 3, 2, 4, 1, 1];
   const count = countOccurrences(null, 2);
   console.log(count);
} catch (err) {
   console.log(err.message);
}
