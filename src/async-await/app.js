function printSquareUsingThenToUnwrapThePromise() {
    // this uses the .then to unwrap the promise using the success and error callback handler
    square(3).then(n => console.log(n)
    ).catch(e => {
        console.log(e);
    });
}

// an async function returns a Promise
async function square(n) {
    return n**2;
}


async function printSquare() {
    console.log(await square(3)); // the await waits for the promise to complete, unwraps and continues
}

printSquare();
printSquareUsingThenToUnwrapThePromise()

