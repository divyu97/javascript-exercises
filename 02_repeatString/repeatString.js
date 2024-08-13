const repeatString = function(string, n) {
    if (n < 0) {
        return "ERROR";
    }
    let finalText = "";
    for (let i = 0; i < n; i++) {
        finalText += string;
    }
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
