let numbers = [1, 3, 5, 7, 9, 11, 13, 15, 17];

console.log(numbers[3]);
console.assert(numbers[5] = 11);

for (let i = 0; i < numbers.length; i++) {
    console.log(`Basic loop (index: ${i}: ${numbers[i]}`);
}

//
for (let number of numbers) {
    console.log(`Enhanced loop ${number}`);
}

// set some
numbers[3] = 18000;
//
for (let number of numbers) {
    console.log(`Enhanced loop ${number}`);
}

numbers[20] = 44;
console.log(numbers.length)
console.log(numbers[20]);

// een manier om de index te hebben terwijl je een ENHANCED for (for each) gebruikt
for ([number,index] of numbers.entries()) {
    console.log(`Hello ${number} on index: ${index}`);
}