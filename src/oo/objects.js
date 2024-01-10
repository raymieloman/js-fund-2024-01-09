let person = {
    name: "Frans",
    age: 55,
    hobbies: ["bier drinken", "hardlopen", "lezen"],
    partner: {
        name: "Francien",
        age: 53,
        color: "Black"
    }
}

console.log(person.name);
console.log(person["name"]);

// with in you loop over the person his properties
for (let attribuut in person) {
    // console.log(attribuut)

    // bonus topic 
    /// aha nu associatieve array to the rescue
    console.log(`My ${attribuut} is ${person[attribuut]}`)
    if (typeof (person[attribuut]) == "object") {
        for (let attr in person[attribuut]) {
            console.log(`My ${attr} is ${person[attribuut][attr]}`)
        }
    }
}
