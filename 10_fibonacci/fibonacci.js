const fibonacci = function(num) {
    const n = parseInt(num);
    if (n < 0) return "OOPS";
    if (n <= 1) return n;
    let a = 0;
    let b = 1;
    let c = 1;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
