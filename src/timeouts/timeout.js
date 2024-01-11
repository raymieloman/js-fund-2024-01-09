function showMessage() {
    // console.log("hello world");
    let raymiesProcessId = setTimeout(showMessage, 200);
    // console.dir(raymiesProcessId);
    // console.log(raymiesProcessId.triggerId);
    if (raymiesProcessId > 13) {
        console.log("Het wordt nu gestopt!!!")
        // $ kill <pid>
        clearTimeout(raymiesProcessId);
    }
}

setTimeout(showMessage, 3000);

console.log("einde programma")






