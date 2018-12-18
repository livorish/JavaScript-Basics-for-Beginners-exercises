function showStars(rows){
   let stroke = '';
   for(let i = 1; i <= rows; i++){
      stroke += '*';
      console.log(stroke);
   }
}

showStars(10);
