
let bCounter = 0;

function a() {
  return false;
}

function b() {
  console.log("I am running b");
  bCounter++;

  return true;
}

function c() {
  console.log("I am running C");
}

if (a() && b()) {
  console.log("A and B is waar");
}


console.log("Na de eerste test");
if (a() && (b() & c())) {
  console.log("A and B and C is waar");
}

console.log(`The b method is invoked: ${bCounter} times`);
