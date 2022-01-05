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

// Correction
var numbers = [];
var randomNumber = 0;

for (var i = 1; i <= 50; i++) {
    randomNumber = Math.floor(Math.random() * (100 + 1) + 1);

    numbers.push(randomNumber)

    // console.log(randomNumber);
} //i++

// console.log(numbers)

var total = 0;

console.log("i:", i);

for (var i = 0; i <= numbers.length - 1; i++) {
    total = total + numbers[i];
}

console.log("Total:", total);
// 149 + 45 = 194 => 194 + 34 = 228

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

// Correction
var numbers = [];
var randomNumber = 0;

for (var i = 0; i <= 50; i++) {

    randomNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);

    numbers.push(randomNumber);
}

// console.table(numbers);

var maxNumbers = 0;

for (var j = 0; j <= numbers.length - 1; j++) {

    if (maxNumbers < numbers[j]) {
        maxNumbers = numbers[j];
    }

}

console.log("Final result", maxNumbers);

//  03 - Unique
const arr = [];
var min = 50;
var max = 200;

for (var i = 0; i <= 50; i++) {
    var num = Math.floor(Math.random() * (max - min + 1) + min);  
    if(arr.indexOf(num) === -1) arr.push(num);
}

let j=0;
while (arr[j] >= 75 && arr[j] <= 100) {
  console.log(j);
  j++;
  }
// arr.sort(function(a, b) {return a - b}).unshift();
console.log(arr);

// Correction
var numbers = [];
var randomNumber;

for (var i = 0; i <= 50; i++) {
	randomNumber = Math.floor(Math.random() * (200 - 50 + 1) + 50);
	numbers.push(randomNumber);
}

var j = 0;
while (!(numbers[j] >= 75 && numbers[j] <= 100) && j < numbers.length) {
	j++;
}

// it's possible that there is no number in the array that respects the conditions
if (numbers[j] !== undefined) {
	console.log("final result", numbers[j]);
} else {
	console.log("no result");
}



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

//Another
const tab = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
const tab2 = ["hello", "stop", "go go go"];
const tab3 = ["hello", "stop", 55];
const tab4 = 78;

function splitWordsAddInTab(words) {
	if (!Array.isArray(words)) {
		console.log("We need an array of strings here!");
		return null;
	}

	let word = "";
	let numberO = 0;

	for (let i = 0; i < words.length; i++) {
		if (!(typeof words[i] === "string")) {
			console.log("The array should contain only strings!");
			return null;
		}

		word = words[i].split("");

		for (let j = 0; j < word.length; j++) {
			if (word[j] === "o") {
				numberO += 1;
			}
		}
	}

	return numberO;
}

console.log(splitWordsAddInTab(tab));
console.log(splitWordsAddInTab(tab2));
console.log(splitWordsAddInTab(tab3));
console.log(splitWordsAddInTab(tab4));
   


