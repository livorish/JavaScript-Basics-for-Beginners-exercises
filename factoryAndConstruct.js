// factory pattern

function addressShow(street, city, zipCode) {
   return {
      street,
      city,
      zipCode
   }
}

const address1 = addressShow('Bakery street', 'London', 'nw1');

console.log(address1);

function AddressShow(street, city, zipCode) {
   this.street = street;
   this.city = city;
   this.zipCode = zipCode;
}

const address2 = new AddressShow('Broadway', 'NYC', '123');

console.log(address2);
