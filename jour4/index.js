/* PARTIE 1*/

// déclarer une variable
var patate = "Hello World";
console.log(patate);
console.log(patate.toUpperCase());
console.log(patate.toLowerCase());

// mutation
var patate = "Hello World";
var patate = patate.toUpperCase();
console.log(patate);

var patate = "Hello World";
var bigPatate = patate.toUpperCase();
console.log(bigPatate);

// on peut utiliser egalement "let" et "const"

//Modifie la variable, on change son contenu
patate = "Bonjour"; //chaine de caractere ou String
console.log(patate);

// Il existe differents types de donnes
// texte, nombres. booleens, tableaudx...

var age = 98; //number
var age1 = "J'ai 98 ans"; //string
console.log(age);

var age = 87;
var adult = true; // Boolean: true or false
var isAdult = true; //camel case
var isConnected = false;


var a = ["bonjour", "hello", 78, false] //tableaux ou array ou liste

//objet: liste de valeur
const obj = {
    name: "Ha Chi",
    age: 31
};
console.log(obj);
// on accede a la valeur d'un objet
console.log(obj.name);
console.log(obj.age);
console.log(obj.name, obj.age);

// Concaténation
console.log("Bonjour " + obj.name + " :)", "tu as : " +obj.age + " ans");

var address;
console.log("Address : ", address); //undefined
address = "1 rue machin.."
console.log("Address : ", address);

//Pour vider une variable
address = null; //nul
console.log("Address : ", address);


/* PARTIE 2*/
// "Bonjour " + obj.name + " :)", "tu as : " +obj.age + " ans"
const obj = {
    name: "Ha Chi",
    age: 31
};
console.log(`Bonjour ${obj.name} :), tu as: ${obj.age} ans`); //template literals cach 2
console.log("Bonjour " + obj.name + " :),", "tu as : " +obj.age + " ans"); //cach 1

// Methodes des strings
var patate = "Hello World";
console.log(patate.length); //legnth: contribue

// Methodes reaplace
// Cach 1
let test = "Coding is hard";
test = test.replace("hard", "fun");
console.log(test); 
console.log(test.replace("hard", "fun"));
// Cach 2
let test = "Coding is hard";
var result = test.replace("hard", "fun");
console.log(result);

let test = "Coding is hard";
test = test.replace("hard", "fun");
console.log("Lettre en position 2: " + test.charAt(2));
console.log("Lettre en position 2: " + test.charAt(test.length - 1));
console.log("Lettre en position 2: " + test.charAt(test.length - 2));
console.log("Lettre en position 2: ", letter);

var lastPosition = test.length -1;
var lastLetter = test.charAt(lastPosition);
console.log("Lettre en derniere position:", lastLetter);