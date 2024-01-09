let age = 18;

if (age < 18) {
  console.log("Too young to drink");
} else {
  console.log("OK to drink");
}

// isNaN
let a = "314";
if (isNaN(a)) {
  console.log("a is not a number");

} else {
  a = parseInt(a);
}
console.log(a);
console.log(typeof (a));


