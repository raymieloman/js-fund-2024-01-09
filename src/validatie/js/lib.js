function validateForm() {

    let message = "";
    let firstName = document.data.firstName.value;
    if (firstName == null || firstName == "") {
        message += "U moet een voornaam invoeren\n";
    }
    let lastName = document.data.lastName.value;
    if (lastName == null || lastName == "") {
        message += "U moet een lastname invoeren\n";
    }

    let dob = document.data.dob.value;
    if (dob == null || dob == "") {
        message += "U dient een geboortedatum in te voeren\n";
    }

    if (message != "") {
        alert("Errors:\n" + message);
    }


    if (message == "") {
        return true;
    } else {
        return false;
    }

    // return message == ""; // boolean, true als message =="" en anders false
}