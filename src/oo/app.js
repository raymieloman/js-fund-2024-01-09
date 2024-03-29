// template, mal
class Stoel {
    // constructor to make it
    // fields, properties, attributes.
    constructor(gewicht, price, color) {
        this.gewicht = gewicht;
        this.price = price;
        this.color = color;
        this.mileage = 0;
    }

    // dit is een method
    // om gedrag te modelleren.
    //
    setName(name) {
        this.name = name;
    }

    // een stoel kan hier lopen
    walk() {
        this.mileage++;
    }
}


let myStoel = new Stoel(2, 35.00, "Red");

console.log(myStoel.color);
console.log(myStoel.mileage);
myStoel.walk();
console.log(myStoel.mileage);
console.log(myStoel.b);

let myStoelError;
// console.log(myStoelError.gewicht); // vout

console.log(myStoelError?.gewicht);
// myStoelError = new Stoel(3, 37, "Bruin");

myStoelError ??= new Stoel(5, 18, "Zwart");
console.log(myStoelError?.gewicht);