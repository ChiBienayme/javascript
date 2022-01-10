//05 - Filter Even
const array = [ 1, 2, 3, 4, 5, 6, 7, 8];

const numbers = array.filter(function numbersEven(numEven) {
        if (numEven % 2 === 0) {
            return numEven;
        }
    });
console.log(numbers);