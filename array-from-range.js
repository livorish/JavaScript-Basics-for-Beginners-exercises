function arrayFromRange(min, max) {
   var arrayMinMax = [];
   for (let k = min; k <= max; k++) {
      arrayMinMax.push(min);
   }
   return arrayMinMax;
}

console.log(arrayFromRange(-10, -4));
