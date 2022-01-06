
//01 - Calculator/ 
function calculator (num1, num2, operation) {
    if (operation === '+'){
        return num1 + num2;
    }
    else if (operation === '-'){
        return num1 - num2;
    }
    else if (operation === '*'){
        return num1 * num2;
    }
    else if (operation === '/'){
        return num1 / num2;
    }
    return 'Error';
}

var result = calculator(
        Number(process.argv[2]), 
        Number(process.argv[4]), 
        process.argv[3]
        );

console.log(result);

//Number() permet de convertir un string en nombre
// process.argv est un tableur contenant les arguments passés à ton programme node
// node (1)calculator.js (2)num1 (3)operator (4)num2

// Version 2
function calculate(num1, operator, num2 ) {
    if (num2 === undefined) {
        return console.log("Error");
    } 
        switch(operator) {
            case "+":
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;   
    }
}
    console.log(
        calculate(
            parseInt(process.argv[2]),
            process.argv[3],
            parseInt(process.argv[4])
        )
    );
