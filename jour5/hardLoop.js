//01 - Sum
const arr = [];
while(arr.length < 50){
    var num = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(num) === -1) arr.push(num); 
    }
console.log(arr);
    
function sumArray(arr){
    let sum = 0;
    let i = 0;
    while (i < arr.length){
        sum += arr[i];
        i++;
    }
    return sum;
}
console.log(sumArray(arr));

//02 - Max
const arr = [];

while(arr.length < 50){
    var num = Math.floor(Math.random() * 200) + 50;
    if(arr.indexOf(num) === -1) arr.push(num);
}
console.log(arr);

var temp = 0;
arr.forEach((element) => {
  if (temp < element) {
    temp = element;
  }
});

console.log(`The largest number in the array: ${temp}`);

//version 2
const arr = [];

while(arr.length < 50){
    var num = Math.floor(Math.random() * 200) + 50;
    if(arr.indexOf(num) === -1) arr.push(num);
}
console.log(arr);

let largestNum = arr.reduce(function (a, b) {
  return Math.max(a, b);
});

console.log(`The largest number: ${largestNum}`);

//  03 - Unique
var arr = [];

while(arr.length < 50){
    var num = Math.floor(Math.random() * 200) + 50;
    if(arr.indexOf(num) === -1) arr.push(num);
}
console.log(arr);

// 04 - Nested Loop
const words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];

function splitWordsAddInTab() {

  let word = "";
  let numberO = 0;

  for (let i = 0; i < words.length; i++) {
    word = words[i].split("");

    for (let j = 0; j < word.length; j++) {
      if (word[j] === "o") {
        numberO +=1;
      }
    }
  }
  return numberO;
}
console.log(splitWordsAddInTab());
   


