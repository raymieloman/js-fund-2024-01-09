function foo() {
    let a;
    console.log(a.getAge());
}

function bar(n) {
    if (n == 0) {
        throw "U mag geen nul geven";
    }
    console.log(`n is hier: ${n}`);
}

function getBankrekeningHouder(bankrekeningNummer) {
    if (bankrekeningNummer == 0) {
        return {
            name: "Marcel"
        }
    } else {
        return null;
    }
}

try {
    foo();
} catch (exception) {
    console.log("Exception gevangen en dood gemaakt en ik ga lekker door!");
}

bar(3);
try {
    bar(0);
} catch (e) {
    console.log(`Er ging iets fout, kijk maar: ${e}`);
    // throw 15;
} finally {
    console.log("Einde try catch block");
}

console.log("Successvol einde van een leuk programma");


let houder = getBankrekeningHouder(3);
console.log(houder);
houder = getBankrekeningHouder(0);
console.log(houder);