

// for loop
// for(init;cond;step)
for (let i = 1; i <= 10; i++) {
    // als cond waar is dan wordt dit block gerund
    console.log(`I is now: ${i}`);
}
// console.log(i); // i is dood hier

// probeer altijd de let te gebruiken in de for en niet ervoor

// dus niet doen zo!
/**
let aantal=  3; // bad practice below
for (aantal = 5; aantal < 10; aantal++) {
    console.log(aantal);
}

console.log(`Ending with: ${aantal}`) // hier is mijn conditie overschreden
*/