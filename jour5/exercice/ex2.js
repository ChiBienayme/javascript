
// 02 - Table
function multiply(num) {
    if (num = num) {
        for (let i = 0; i < 10; i++) {
            let result = i**2;
            console.table(`${num} x ${i} = ${result}`);
            } 
            
    } else {
        return 'Error';
    }
}
var result = multiply(process.argv[2]) ;
console.log(result);
