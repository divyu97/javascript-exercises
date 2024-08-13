const sumAll = function(x , y) {
    if (isNaN(x) || isNaN(y) || !Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return "ERROR";
    }
    if (x > y) {
        var number1 = y;
        var number2 = x;
    }
    else {
        var number1 = x;
        var number2 = y;
    }
    let finalSum = number1 + number2;
    for (let i = number1 + 1; i < number2; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
