const n = 2.487;
// const res = n + 4;
// const res = n * 4;
// const res = n / 4;
// const res = n ** 4;
const res = n % 4;
console.log(res);

let n = 2;
n += 3 //2+3
console.log(n);

let n = "2.890808";
// let c = "4";
// n = n.toString()
n = parseInt(n);//lay so nguyen
console.log(n);

let n = 4 + "4";
const tab =[4, 5, 8, true]
console.log(n); //44

let n = 4 + parseInt(4);
console.log(n); //8

// Math
Math.min(1, 2, 14, 8) //1
// Math.min(*valeur d*un serveur*)

//arrondir
const n = 3.14;
console.log(Math.floor(n));//3
console.log(Math.ceil(n));//4

const n = "3.6";
console.log(Math.round(parseInt(n)));//3

//random
const n = Math.random();
console.log(n);

console.log(Math.floor(Math.random() * 10 )+ 1);

const isAdult = true;//or false
console.log("You are an adult");
console.log("You are an child");

// if else si/sinon
const isAdult = true;
if (isAdult === true) {
    console.log("You are an adult");
} else {
    console.log("You are an child");
}
console.log("End of the program");

const firstname = "Caroline";
if (firstname === "Caroline") {
    console.log("You are Caroline");
} else {
    console.log("You are not Caroline");
    if (firstnam === "Andrei") {
        console.log("Oh, It's Andrei");
    }
}

let showToUser;
if (isAdult === true) {
    showToUser = "You are an adult";
} else {
    showToUser = "You are a child";
}
console.log(showToUser);

console.log(isAdult ? "You are an adult" : "You are a child"); //syntax vite check


// boucle switch
const firstname = "Caroline";
const isAdult = true;
switch (firstname) {
    case "Caroline": 
        console.log("It's Caroline");
        break;//stop searching here when it finds the result
    case "Andrien":
        console.log("Hello Andrien");
        break;
    case "Jessica":
        console.log("Bienvenue, Jessica");
        break;
    default:
}   console.log("Who are you?");

// boucle if; else; else if
if (firstname === "Caroline") {
    //
} else if (firstname === "Lysiane") {
    //
} else if (firstname === "Andrien") {
    //
} else {
    console.log("You are....");
}

// 
if (firstname === "Caroline") {
    //
} else if (firstname === "Lysiane") {
    //
} else if (firstname === "Andrien") {
    //
} else {
    console.log("You are....");
}

// ET/AND = &&
//OU/OR = ||
if (firstname ="Ha Chi" && age>=18) {
    console.log("You are an adult");
}

if (firstname ==="Ha Chi" || firstname === "Jessica") {
    console.log("You are Ha Chi");
}

if  ((firstname ==="Ha Chi" || firstname === "Jessica") && age >= 18) {
}