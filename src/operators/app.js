// mod
console.assert(7 % 2 == 1);

let age = 45;
age++;

console.assert(age == 46);

age--;
console.assert(age == 45);

age = 3;
console.assert(age ** 2 == 9);


age = 10; // hier wil ik de 10 wel meenemen in de print
console.log(age++); // let op: dit is geen age+1, maar age = age +1 NA HET PRINTEN
console.assert(age == 11);

age = 20 // hier wil ik de 20 NIET meenemen in de print
console.log(++age);
console.assert(age == 21);


let myage = 45;
myage++; // sneller
myage = myage + 1;



