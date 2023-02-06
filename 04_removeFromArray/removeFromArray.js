const removeFromArray = function(inArray, ...args) {
    let outArray = inArray.filter(item => !args.includes(item))
    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;
