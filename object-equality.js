function AddressShow(street, city, zipCode) {
   this.street = street;
   this.city = city;
   this.zipCode = zipCode;
}
const address1 = new AddressShow('Broadway', 'NYC', '123');
const address2 = new AddressShow('Broadway', 'NYC', '123');
const address3 = address2;

function areSame(address1, address2) {
   return address1 === address2;
}
console.log(areSame(address3, address2));


function areEqual(address1, address2) {
   return Object.values(address1).join() === Object.values(address2).join();
}
console.log(areEqual(address1, address2));
