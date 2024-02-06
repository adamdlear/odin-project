const removeFromArray = function(...args) {
    let list = args[0];

    for (let i=1; i<args.length; i++) {
        list = list.filter(val => val !== args[i]);
    }
    
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
