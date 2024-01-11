let postcode = "7603 EC";

let regex = /^[1-9]\d{3}\s?[a-zA-Z]{2}$/

if (regex.test(postcode)) {
    console.log("Postcode ok");
} else {
    console.log("Invalid postcode");
}

let address = "1111BB237Bis";
let regexpAddressHuisToev = /^([1-9]\d{3}\s?[A-Za-z]{2})(\d+)([A-Za-z]*)$/

let [_, postc, huisnummer, toevoeging] = regexpAddressHuisToev.exec(address);

console.log(postc);
console.log(huisnummer);
console.log(toevoeging);



// warning: nice but difficult code below :-)
// fetch my dob out of the string
let sentence = "I am Raymond and I am born on 09-08-1968";
let regexFinddate = /(\d{2})-(\d{2})-(\d{4})/;

let [a, day, month, year] = regexFinddate.exec(sentence);
let date = new Date(year, month-1, parseInt(day)+1);
console.log(day, month, year); // 0 = jan, 1 = feb,  7 = aug, // hence please use moment.js or luxon.js
console.log(date);