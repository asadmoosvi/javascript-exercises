const palindromes = function (str) {
    // first we remove punctuation
    let result = str.replace(/[^a-zA-Z0-9]/g, '');
    result = result.toLowerCase();
    const reversed_result = result.split('').reverse().join('');
    return result === reversed_result;
};

// Do not edit below this line
module.exports = palindromes;
