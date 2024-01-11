function perform() {
    fetch('http://localhost:3000/employees').then(response => response.text()).then(text => {
        console.log("The home page is " + text.length + " characters long.");
        console.log(text);
        let employees = JSON.parse(text);
        for (let employee of employees) {
            console.log(employee.firstName);
        }
    });
}