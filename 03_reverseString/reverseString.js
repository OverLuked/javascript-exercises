const reverseString = function(string) {
    let wordArray = string.split("");
    let reversed = [];

    for (let i = wordArray.length, j = 0; i >= 0 && j <= wordArray.length; i --, j ++) {
        reversed[j] = wordArray[i];
    }
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
