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
     result = Math.random().toString(36).slice(num).toUpperCase(); 
     
     if (num < 6 || num > 15) {
        console.log("error");
    } else {
     return result;
    }
}
console.log(generatePassword(8));



const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };
  console.log(generatePassword);

  function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}



// Bonus 2
var player1Dice1 = Math.floor (Math.random()*6)+1;
        var player1Dice2 = Math.floor (Math.random()*6)+1;

        var player2Dice1 = Math.floor (Math.random()*6)+1;
        var player2Dice2 = Math.floor (Math.random()*6)+1;

        var scoreP1 = player1Dice1 + player1Dice2;
        var scoreP2 = player2Dice1 + player2Dice2;

        var p1d1 =  player1Dice1;
        var p1d2 =  player1Dice2;

        var p2d1 = player2Dice1;
        var p2d2 = player2Dice2;


        console.log ("Player 1 score is : " + scoreP1);
        console.log(p1d1);
        console.log(p1d2);
        console.log ("Player 2 score is : " + scoreP2);
        console.log(p2d1);
        console.log(p2d2);
        if (scoreP1 > scoreP2) {
            console.log("Player 1 wins. Player 2 loses.");
        }
        else if (scoreP2 > scoreP1) {
           console.log("Player 2 wins. Player 1 loses.");
        }
        else {
            console.log("Draw."); 
        }