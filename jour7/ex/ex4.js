//04 - Filter Numbers
const array = [1, "toto", 34, "javascript", 8];

const numbers = array.filter(function numbersOnly(value) {
        if (typeof (value) === 'number') {
            return value;
        }
    });
console.log(numbers);