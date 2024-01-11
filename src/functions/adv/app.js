class Person {

    constructor(age) {
        this.age = age;
        this.name = "Raymond";
    }

    // SCOPE LOST
    getAge() {
        return this.age;
    }

    // SCOPE behouden
    getLeeftijd = () => {
        return this.age;
    }
}


function foo() {
    console.log("In foo");
}

function bar(f) {
    console.log("Starting bar");
    f();
    console.log("Ending bar");
}


//
console.log(foo);


let myfunc = foo;
bar(myfunc);

let otherFunc = function (a, b) {
    return a + b;
}


console.log(otherFunc(3, 4));

bar(function () {
    console.log("Dit is de anonieme")
})

let arrowFunc = () => {
    console.log("in arrowFunc")
}

bar(arrowFunc);

bar(() => {
    console.log("Anonieme arrow function")
})

let person = new Person(42);
const {getAge} = person;
// console.log(getAge())

// TakeAway:
/*
Dat je ziet dat een function niet de this. reference behoudt maar een
arrow function wel.
 */
const {getLeeftijd}  = person;
console.log(getLeeftijd());

// destructuring
let { age, name } = person;
console.log(age);
console.log(typeof (age));
console.log(name);
console.log(typeof (name));