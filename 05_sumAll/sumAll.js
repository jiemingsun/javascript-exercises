const sumAll = function(...args) {
    // 1st if block handles error checking
    if (
        args.length == 2
        && args.map(arg => (arg > 0)).every(Boolean)
        && args.map(arg => (typeof arg == "number")).every(Boolean)
    ) {

        let argMin = Math.min(...args);
        let argMax = Math.max(...args);
        let argsDiff = argMax - argMin;

        if (argsDiff % 2 == 0) {
            return (argsDiff + 1) * argMin + (1 + argsDiff) * argsDiff / 2;
        } else {
            return (argsDiff + 1) * argMin + argsDiff * (argsDiff - 1) / 2 + argsDiff;
        }
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
