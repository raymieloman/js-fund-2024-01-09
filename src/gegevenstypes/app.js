let name = "ABCDScript and Kotlin";
console.assert("CD" == name.substring(2, 4));


// charAt
console.assert('B', "ABC".charAt(1));


// reverse
let text = "Kippenhok";
console.log(text)
// Reverse the text
let rev = ''
for (let i = 0; i < text.length; i++) {
    rev = text.charAt(i) + rev
}
console.log(rev)

let thanksString = "So long, and thanks for all the fish";
let indexOfthanks = thanksString.indexOf('than');
console.log(indexOfthanks);
console.log(thanksString.substring(indexOfthanks))
