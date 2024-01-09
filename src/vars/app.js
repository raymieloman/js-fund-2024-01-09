let name = "Poedel";

console.log(name);

let a = 100000;
console.log(typeof (a));

let btw = 21.3;

var name2 = "Raymond";
let date = "09-01-2024";

{
  let city = "Utrecht";
  var country = "Nederland";
}

// city is dood
// Hier is country nog WEL in scope en city niet meer
// console.log(city); // vout
console.log(country);
country = "Duitsland";
let city = "Almelooo";
console.log(date);

// const
const ourCountry = "Nederland";
// ourCountry = "Belgie"; // vout

// door hier const te gebruiken kan ik eronder (nu regel 36) geen nieuwe
// person toewijzen aan person
const person = {
  name: "Frans",
  dob: "13-03-1970"
}

console.table(person);

// maar je mag de name wel aanpassen
person.name = "Bert";

// goto test rloman
let goto = 13;

/* vout
person = {
  name: "Francien",
  dob: "333333"
}
console.table(person);
 */

// hieronder check wat scope is
{
  testVariable = "Test it";
}
console.log(testVariable);
console.assert(testVariable == "Test it");

console.log(typeof (testVariable));


{
  let testVariable2 = "Test var 2";
}
let caught = false;
try {
  console.log(testVariable2 == undefined);
  console.assert(0 == 1, "Should never come here");
} catch (e) {
  // ok
  caught = true;
}
console.assert(caught);



let salary = 2533.33;
let rounded = Math.round(salary);
console.log(salary);
console.log(rounded);

