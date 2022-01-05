//04 - Guess
var num = Math.floor(Math.random() * (100 - 1)) + 1;

function play(numRandom) {
    if (numRandom <= 10 ) {
        console.log("C'est plus !" );
    } else if (numRandom >= 90) {
        console.log( "C'est moins !");
    } else {
        console.log("Bravo!!!!");
    }
    return 'Error';
}

console.log(`Quel est le nombre mystère ? ${num}`);

//V2
// function num1(min, max) {  
//     return Math.floor(
//       Math.random() * (max - min) + min
//     )
//     }
//   console.log(num1(1, 100))

