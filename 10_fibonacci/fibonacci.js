const fibonacci = function (n) {
    n = Number(n);
    let i = 0;
    let j = 1;
    let temp;

    if (n < 0) {
        return 'OOPS';
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let iterations = n - 1;
        for (let k = 0; k < iterations; ++k) {
            temp = i + j;
            i = j;
            j = temp;
        }
        return j;
    }
};

// Do not edit below this line
module.exports = fibonacci;
