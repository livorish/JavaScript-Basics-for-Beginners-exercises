let a = "red";
let b = "blue";
console.log("a: " + a + "\n" + "b: " + b);
a = b + " " + a;
b = a.split(" ");
a = b[0];
b = b[1];
console.log("a: " + a + "\n" + "b: " + b);
