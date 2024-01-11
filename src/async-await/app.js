// an async function returns a Promise
async function square(n) {
    return n ** 2;
}


async function printSquare() {
    console.log(await square(3)); // the await waits for the promise to complete, unwraps and continues
}

printSquare();

console.log("Einde programma")
