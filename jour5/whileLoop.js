//01 - Comptons
var x = 50;
while (x <= 200) {
  console.log(x, x += 2);
  x += 2;
}

// 02 - Try again
let dice = null;
let count = 0;
while ( dice !== 6) {
  console.log(Math.floor(Math.random(parseFloat)*6 + 1));
  break;
}



function rollDie() {
  return Math.floor(Math.random() * 6); 
}

var counts = [0, 0, 0, 0, 0, 0];

var results = [];

for (var i = 0; i < 25; i++) {
  var result = rollDie();
  counts[result] = counts[result] + 1;
  results.push(result);
}

console.log(results);  
console.log(counts); 

//03 - Course
let ussainBolt = 0;
let tysonGay = 0;
while (ussainBolt <= 100 || tysonGay <=100) {
  let ussainBoltRandom = Math.floor(Math.random)*10 + 1;
  let tysonGayRandom = Math.floor(Math.random)*10 + 1;
  console.log());
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


