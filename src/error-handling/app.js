function foo() {
    let a;
    console.log(a.getAge()); // throws TypeError (bewust hier om een fout te forceren)
}

function bar(n) {
    if (n == 0) { // zeg maar je mag niet door nul delen, maar in js kan delen door nul (wordt Infinity)
        throw "U mag geen nul geven";
    }
    console.log(`n is hier: ${n}`);
}

try {
    foo();
} catch (exception) {
    console.log("Exception gevangen, en prg gaat dus door");
}

bar(3);
try {
    bar(0);
} catch (e) {
    console.log(`Er ging iets fout, kijk maar: ${e}`);
} finally {
    // wordt uitgevoerd na try of na catch
    console.log("Einde try catch block");
}

console.log("Successvol einde van een leuk programma");