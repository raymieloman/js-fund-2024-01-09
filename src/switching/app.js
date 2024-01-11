let days;

let month = 1;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 2:
    days = 28; // schrikkeljaar ff uitgesloten
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
}

console.assert(days = 31);

let someString = "januari";
switch (someString) {
  case "jan":
  case "januari":
    console.log("That is januari");
    break;
  default:
    console.log("That is not januari, something else");
}
