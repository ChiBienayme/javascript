

var calculator = require('./table-utils');
 
var a=10, b=5;
 
console.log("Addition : "+calculator.add(a,b));
console.log("Multiplication : "+calculator.multiply(a,b));


//la correction
var tableUtils = require("./table-utils")

var multiplyFunc = tableUtils.multiply;
var addtionFunc = tableUtils.addition;

if (process.argv.length === 3) {
    var num = parseInt(process.argv[2]);

    addtionFunc(num)
} else {
    console.log("Error")
}


