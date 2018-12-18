function isLandscape(width, height){
   return (width > height) ? true : false; // or we could write like this   "return (width > height)"
}

console.log(isLandscape(400, 800));