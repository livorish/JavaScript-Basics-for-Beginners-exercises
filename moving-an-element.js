function move(array, index, offset) {
   for (let k = 0; k < array.length; k++) {

      if (k === index) {
         if ((index + offset < 0) || (index + offset > array.length - 1)) {
            throw "Invalid offset.";
         }
         try {
            let temp = array.splice(index, 1);
            temp = temp.join();
            array.splice(index + offset, 0, +temp);
         } catch (err) {
            console.log(err);
         }

      }
   }
   return array;

}

const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);
console.log(output)
