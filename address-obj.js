const address = {
   street: 'Bakery street',
   city: 'London',
   zipCode: 'nw1'
}


function showAddress(address) {
   for (item in address) {
      console.log(item, address[item])
   }
}
showAddress(address);
