function sumOfArg(items) {
   let sum = 0;
   if ((!isNaN(items)) && typeof items !== 'string') {
      for (let i = 0; i < arguments.length; i++) {
         sum += arguments[i];
      }
      return sum;
   }
   if (Array.isArray(items)) {
      for (let i = 0; i < items.length; i++) {
         sum += items[i];
      }
      return sum;
   }
   return 'not array';
}


console.log(sumOfArg(89, 15, 78, 43))
