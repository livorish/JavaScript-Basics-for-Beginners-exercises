Array.prototype.include = function (num) {
   for (let i = 0; i < this.length; i++) {
      if (num === this[i])
         return true;
   }
   return false;
}


const numbers = [1, 2, 0, 3, 4, -5, 60];
console.log(numbers.include());
