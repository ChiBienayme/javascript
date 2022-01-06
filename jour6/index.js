//Debug
console.log("Hello");

let x = 0;
for (let i = 0; i < 10000000; i++) {
    x = i;
    console.log("Hey");
}

//Date
const date = new Date();
// console.log(date);
console.log(date.getDay());
console.log(date.getYear());
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

const date2 = Date.now();
console.log(date2);
//1641465394133: nombres de millisecondes qui se sont écoulées depuis le 1er Janvier 1970 à 00:00

const date3 = new Date(1641465394133);
console.log(date3);

// Regex
const email = "abc@gmail.com";

const test = "adhasughiyt8reh";
const pattern = /(a|b|c)/gi; 

const test = "An apple was eaten";
console.log(test.replace(/a/gi, "4")); //4n 4pple w4s e4ten

const num = "My number is : 555-555-555-555";
console.log(num.replace(/[0-9]/g, "x")); //My number is : xxx-xxx-xxx-xxx

const str = "Hey 4get these words 3_please";
const res = str.match(/\b[a-z]+/gi);
console.log(res); //[ 'Hey', 'these', 'words' ]

const text = "ABxxAxxB";
const pos = text.search(/A..B/gi);
console.log(pos);//4

if (text.charAt(text.search()));