// 01 - Object
let cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};
console.log(cat);
console.log(cat.age);
if (cat.isCute === true) {
    console.log("So cute");
}

// 02 - Combine
let cat = {
    name: "Garfield",
    age: 3,
    isCute: true
};
let cat2 = {
    name: "Choucha",
    age: 19,
    isCute: true
};
let cats = [cat, cat2];
console.log(cat.age);
console.log(cat2.isCute);

// 03 - Even
function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even number: " + num);
    } else {
        console.log("Odd number: " + num);
    } 
}
checkIfEven(4);
checkIfEven(5);
checkIfEven(28);
checkIfEven(31);

// 04 - Compare
function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger than ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num2} is bigger than ${num1}`);
    } else {
        console.log(`${num1} and ${num2} are same`);
    }
}
compare(1,2);
compare(2,1);
compare(2,2);

// 05 - Add Up
function addUp(num) {
    for (let i = 1; i < 12; i++) {
         num += i;
    } 
    console.log(num);
}
addUp(12)


function addUp(num) {
    let n = 1;
    let x = 1;
    while (n < 12){
      n++;
      x += n;
    }
    console.log(x, n);
    }
addUp(12)


// 06 - Time

function convertSecondsTo(sec) 
 {
     var hours = Math.floor(sec / 3600);
     var minutes = Math.floor((sec - (hours * 3600)) / 60);
     var seconds = sec - (hours * 3600) - (minutes * 60);
     seconds = Math.round(seconds * 100) / 100
    //  var seconds = Math.round(sec - (hours * 3600) - (minutes * 60));
     
     var result = (hours < 10 ? "0" + hours : hours);
     result += ":" + (minutes < 10 ? "0" + minutes : minutes);
     result += ":" + (seconds < 10 ? "0" + seconds : seconds);
     return result;
}
console.log(convertSecondsTo(3700));

//Bonus 1
function generatePassword(num) {
     result = Math.random().toString(36).toUpperCase(); 
    //  if (result.length < 6 || result.length > 15) {
    //     console.log("error");
    // }
     return result;
}
console.log(generatePassword(19));

var randomstring = Math.random().toString(36).slice(-8);
Math.random()// Generate random number, eg: 0.123456
.toString(36) // Convert  to base-36 : "0.4fzyo82mvyr"
.slice(-8);// Cut off last 8 characters : "yo82mvyr"

alert(randomstring);
//  36: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

console.log(randPassword);


// Bonus 2
function launchDice(numberOfDice) {
    for (let i = 1;  i++) {
        numberOfDice += i;
   } 
   console.log( Math.random(numberOfDice));
}