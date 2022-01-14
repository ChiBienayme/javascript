//05 - Filter Even
const array = [ 1, 2, 3, 4, 5, 6, 7, 8];

const numbers = array.filter(function numbersEven(numEven) {
        if (numEven % 2 === 0) {
            return numEven;
        }
    });
console.log(numbers);

// correction
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var even = numbers.filter(
    function (element) {
        return element % 2 === 0; //true or false
    }

)

function isEven(number) {
    return number % 2 === 0;
}

var evenBis = numbers.filter(isEven)

var odd = numbers.filter(
    (element) => element % 2 === 1
)

console.log("Even Bis:", evenBis);
console.log("Resultat final even", even);
console.log("Resultat final odd", odd);
