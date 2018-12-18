const movie = {
   title: 'a',
   releaseYear: 2018,
   rating: 4.5,
   director: 'b',
   cost: 1500253
}

showProperties(movie);



function showProperties(obj){
   for(key in obj)
      if (typeof obj[key] === 'string')
         console.log(key, obj[key]);
}



