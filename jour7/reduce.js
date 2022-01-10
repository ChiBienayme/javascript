/** REDUCE **/
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
});
console.log(total);


var numbers = [1, 2, 3, 4, 5];

var total = numbers.reduce((acc, cur) => acc + cur, 5); // syntaxe "arrow function"

console.log(total); // retournera 5 + 1 + 2 + 3 + 4 + 5 = 20