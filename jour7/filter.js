/** FILTER **/
const numbers = [1, 2, 3, 4, 5];
const bigNumbers = numbers.filter(function(num) {
    return num >= 3;
});
console.log(numbers, bigNumbers); //[ 1, 2, 3, 4, 5 ] [ 3, 4, 5 ]


const users = [
    { name: "Caroline", age: 48},
    { name: "Lysiane", age: 25 },
    { name: "Nicolas", age: 17}
];
var adults = users.filter(function(user) {
    return  user.age >= 18;
});
console.log(adults);
//[ { name: 'Caroline', age: 48 }, { name: 'Lysiane', age: 25 } ]

const users = [
    { name: "Caroline", age: 48, premium: true},
    { name: "Lysiane", age: 25, premium: false },
    { name: "Nicolas", age: 17, premium: true}
];
var premiumUsers = users
.filter(function(user) {
    return  user.premium === true && user.age > 25;
})
.map(function(premiumUsers) {
    return premiumUsers.name;
});
console.log(premiumUsers); //[ 'Caroline' ]

// const reverseStr = variable.split("").reverse().join("");
// console.log(reverseStr);
