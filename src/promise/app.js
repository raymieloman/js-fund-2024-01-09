function giveMe() {
    return Promise.resolve(3);
}

let result = giveMe();
console.log(result);

result.then(data => {
    console.log(data);
})


console.log("einde programma")

