const repeatString = function(string, numberOfRepeatition) {
    let input = '';

    for (let i = 0; i < numberOfRepeatition; i ++) {
        input += string;
    }

    return input;
};

// Do not edit below this line
module.exports = repeatString;
