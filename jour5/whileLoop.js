//01 - Comptons
var x = 50;
while (x <= 200) {
  console.log(x, x += 2);
  x += 2;
}

// 02 - Try again
let dice = null;
let count = 0;
while (dice !== 6 && dice <= 6) {
  dice = Math.floor(Math.random() * 6) +1;
    console.log(dice);
    count++
}
console.log(count);


//03 - Course
let ussainBolt = 0;
let tysonGay = 0;
while (ussainBolt <= 100 || tysonGay <=100) {
  let ussainBoltRandom = Math.floor(Math.random() * 10) + 1;
  let tysonGayRandom = Math.floor(Math.random() * 10) + 1;
  if (ussainBoltRandom > tysonGayRandom) {
    console.log(`Ussain Bolt ${ussainBoltRandom} has won Tyson Gay ${tysonGayRandom}`);
  } else {
    console.log(`Ussain Bolt ${ussainBoltRandom} has lost Tyson Gay ${tysonGayRandom}`);
  }
  break;
}

let ussainBolt = 0;
let tysonGay = 0;
let ussainBoltTotal = 0;
let tysonGayTotal = 0;

while (ussainBolt <= 100 && tysonGay <=100) {

  let ussainBolt = Math.floor(Math.random() * 10) + 1;
  let tysonGay = Math.floor(Math.random() * 10) + 1;

  if (ussainBolt > tysonGay) {
    console.log(`Ussain Bolt ${ussainBolt} has won Tyson Gay ${tysonGay}`);
    ussainBoltTotal += ussainBolt;

  } else if (ussainBolt = tysonGay){
    console.log(`Ussain Bolt ${ussainBolt} equals  Tyson Gay ${tysonGay}`);

  } else {
    console.log(`Ussain Bolt ${ussainBolt} has lost Tyson Gay ${tysonGay}`);
    tysonGayTotal += tysonGay;
  }

  break;
}
console.log(ussainBoltTotal);
console.log(tysonGayTotal);



 


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


