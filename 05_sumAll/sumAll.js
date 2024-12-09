const sumAll = function(min, max) {
    let sum = 0;

    for (min; min <= max; min ++) {
        sum += min;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
