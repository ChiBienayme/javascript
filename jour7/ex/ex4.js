//04 - Filter Numbers
const array = [1, "toto", 34, "javascript", 8];

const numbers = array.filter(function (number) {
        if (typeof number === 'number') {
        return number;
        // return typeof number === "number";
        }
    });
console.log(numbers);


