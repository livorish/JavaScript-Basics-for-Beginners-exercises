const movies = [
   {
      title: 'a',
      year: 2018,
      rating: 4.5
   },
   {
      title: 'c',
      year: 2011,
      rating: 4.9
   },
   {
      title: 'b',
      year: 2018,
      rating: 5.0
   },
   {
      title: 'j',
      year: 2018,
      rating: 3.8
   },

]
// 1
//for (i in movies) {
//   if (movies[i].year === 2018 && movies[i].rating > 4) {
//      console.log(movies[i]);
//   }
//
//}

//
//var checkMovies = movies.filter(function (movie) {
//   return movie.year === 2018 && movie.rating > 4;
//});

//console.log(checkMovies)


// console.log(movies[i].rating.sort(function (a, b) {
//      return b - a
//   }));

//for (let i = 0; i < movies.length; i++) {
//   console.log(movies[i].rating);
//
//
//}

// 3
//function compare(a, b) {
//   // Use toUpperCase() to ignore character casing
//   const arating = a.rating;
//   const brating = b.rating;
//
//   let comparison = 0;
//   if (arating > brating) {
//      comparison = 1;
//   } else if (brating < arating) {
//      comparison = -1;
//   }
//   return comparison;
//}
//
//
//console.log(movies.sort(compare));


// 2

//function compare(a, b) {
//   // Use toUpperCase() to ignore character casing
//   const arating = a.rating;
//   const brating = b.rating;
//
//   let comparison = 0;
//   if (arating < brating) {
//      comparison = 1;
//   } else if (brating > arating) {
//      comparison = -1;
//   }
//   return comparison;
//}
//
//
//console.log(movies.sort(compare));

function sortByTitle(a, b) {
   const titleA = a.title.toUpperCase();
   const titleB = b.title.toUpperCase();

   if (titleA < titleB) {
      return -1;
   }
   if (titleA > titleB) {
      return 1;
   }

   return 0;

}


console.log(movies.sort(sortByTitle));
