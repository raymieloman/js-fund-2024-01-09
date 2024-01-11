// Example POST method implementation:
async function postData(url = "", employee = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(employee), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

function performGet() {
    fetch('http://localhost:3000/employees').then(response => response.text()).then(text => {
        console.log("The home page is " + text.length + " characters long.");
        console.log(text);
        let employees = JSON.parse(text);
        for (let employee of employees) {
            // en je zou dus de employees in een table in de html kunnen zetten.
            console.log(employee.firstName);
        }
    });
}

function createEmployee() {
    postData("http://localhost:3000/employees", { firstName: "Paulus" }).then((newEmployee) => {
        console.log(newEmployee); // JSON data parsed by `data.json()` call
        // en je zou dus de employee  die gemaakt is in een venster kunnen tonen
    });
}