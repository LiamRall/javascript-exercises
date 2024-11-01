const removeFromArray = function(array, ...args) {
    var result = array;
    for (let i = 0; i < args.length; i++) {
        result = result.filter(item => item !== args[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
