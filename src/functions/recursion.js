function fac(n) {
    if (n == 0) {
        return 1;
    }
    return n * fac(n - 1);
}

let fac3 = fac(3);

console.log(fac3);
