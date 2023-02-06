const repeatString = function(userStr, repeatTimes) {
    let output = '';
    if (repeatTimes < 0) {
        return 'ERROR';
    } else {
        for (let i = 0; i < repeatTimes; i++) {
            output += userStr;
        }
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
