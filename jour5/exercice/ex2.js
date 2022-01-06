
// 02 - Table
if (process.argv.length === 3) {

    multiply(parseInt(process.argv[2]))
} else {
    console.log("Error")
}

function multiply(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} =`, num * i)
    }
}
