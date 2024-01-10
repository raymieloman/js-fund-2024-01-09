function square(n) {

    return n ** 2;
}

function foo() {
    for (let element of arguments) {
        console.log(`element with value ${element} is of type ${typeof(element)}`);

    }
}


let mySquare = square(3);
console.log(mySquare);
console.assert(mySquare == 9);

console.log(square(2));

foo("Poedel", 3, "Jansen")