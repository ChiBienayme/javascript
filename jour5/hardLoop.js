//01 - Sum

    var arr = [];

    while(arr.length < 50){
        var num = Math.floor(Math.random() * 100) + 1;
        if(arr.indexOf(num) === -1) arr.push(num);
    }
    console.log(arr);

    var total = 0;
    while (total > 0) {
      total += num;
      num++
    };
    
    console.log(`The largest number in the array: ${total}`);

//02 - Max
var arr = [];

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
var arr = [];

while(arr.length < 50){
    var num = Math.floor(Math.random() * 200) + 50;
    if(arr.indexOf(num) === -1) arr.push(num);
}
console.log(arr);

let largestNum = arr.reduce(function (a, b) {
  return Math.max(a, b);
});

console.log(`The largest number: ${largestNum}`);

   


