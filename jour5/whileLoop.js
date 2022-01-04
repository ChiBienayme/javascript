//01 - Comptons
var x = 50;
while (x <= 200) {
  console.log(x, x += 2);
  x += 2;
}

// 02 - Try again
var count = 0;
var dice = null;
var min = 1;
var max = 6;
while ( dice !== 6)  {
    var diceRandom  = Math.floor(Math.random() * (max - min + 1) + min); //1 2 3 4 5 6
    if (diceRandom === 6) {
        count++;
    }
    break;
}
console.log(diceRandom);
console.log(count);


var count = 0;
var dice = null;
while ( dice !== 6)  {
    var throwDice  = Math.floor(Math.random() * 6) + 1; //1 2 3 4 5 6 
    if (throwDice === 6) { 
      count++; 
      break;
    } 
}
console.log(throwDice);
console.log(count);


//03 - Course
let ussainBolt = 0;
let tysonGay = 0;
while (ussainBolt <= 100 || tysonGay <=100) {
  let ussainBoltRandom = Math.floor(Math.random) * 10 + 1;
  let tysonGayRandom = Math.floor(Math.random) * 10 + 1;
  console.log();
  break;
}
console.log(`The winner is + ${arr}`);


//04 - Des boites
var box1 = 12;
var box2 = 5;
while (box1 > 0) {
    console.log(box2);
    box1 -= 10;
    console.log(box1);
}

//05 - Encore des boites
var i = 0;
var box1 = 7;
while (i > 0) {
    i++;
    console.log(box1 + i);
}
console.log(i);
console.log(box1);


