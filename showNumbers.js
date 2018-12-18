function showNumbers(limit){
   for (let i = 0; i <= limit; i++){   
      const message = (i % 2 === 0)? i + " EVEN":i + " ODD"
      console.log(message);
     
   }
}
const show = showNumbers(15);
console.log(show);