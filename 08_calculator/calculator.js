const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (arr) {
    return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
    return arr.reduce((total, current) => total * current, 1);
};

const power = function (base, exp) {
    let result = 1;
    for (let i = 0; i < exp; ++i) {
        result *= base;
    }
    return result;
};

const factorial = function (n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
