Array.prototype.except = function (number) {
   newArray = [];
   for (let i = 0; i < this.length; i++) {
      if (number !== this[i]) {
         newArray.push(this[i]);
      }
   }
   return newArray;
}

const numbers = [1, 2, 3, 5]
const output = numbers.except(2);
console.log(output);
