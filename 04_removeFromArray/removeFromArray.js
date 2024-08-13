const removeFromArray = function(originalArray, element) {
    const newArray = [];
    for (const i of originalArray) {
        for (let j = 1; j < arguments.length; j++) {
            if (j === arguments.length - 1){
                if (i !== arguments[j]) {
                    newArray.push(i);;
                }
            }
            else if (i === arguments[j]) {
                break;
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
