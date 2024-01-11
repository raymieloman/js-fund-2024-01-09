let timeleft = 10;
let countId;

function start() {
    countId = setInterval(countDown, 1000);
}

function countDown() {
    if (timeleft > 0) {
        timeleft--;
    } else {
        clearInterval(countId);
    }
    console.log(timeleft)
}

start();
console.log("einde programma");