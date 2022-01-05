//03 - Separate Table
function multiply(num) {
    for (let i = 0; i < 10; i++) {
        let result1 = i**2;
        console.table(`${num} x ${i} = ${result1}`);
        } 
}

function addition() {
    for (let j = 0; j < 10; j++) {
        let result2 += j;
        console.table(`${num} + ${j} = ${result2}`);
        } 
}
module.exports = {
    multiply, 
    addition
};