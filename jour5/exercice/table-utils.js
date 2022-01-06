//03 - Separate Table
// Returns addition of two numbers
exports.add = function (a, b) {
    return a+b;
}; 

 
// Returns product of two numbers
exports.multiply = function (a, b) {
    return a*b;
};

//la correction
function multiply(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} =`, num * i)
    }
}

function addition(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} + ${i} =`, num + i)
    }
}

module.exports = {
    multiply,
    addition
}