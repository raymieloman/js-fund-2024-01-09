let counter = 0;
let message = "Hello world!<br>\n";

function showMessage() {
    document.write(message);

    let pid = setTimeout(showMessage, 500);
    if (counter > 5) {
        // let op: dit wordt soms twee keer geprint, ga voor jezelf na waaarom?!?!? :=-)
        console.log("Het wordt nu gestopt!!!");
        clearTimeout(pid);
    }
    counter++;
}

setTimeout(showMessage, 3000);

console.log("einde programma")






