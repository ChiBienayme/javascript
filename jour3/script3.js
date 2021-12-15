// Arrays
const  ingredients = ["milk", "sugar"];
const  ingredient1 = "milk";
const  ingredient2 = "sugar";
console.log(ingredients.length);

const tool1 ="pan";
const tools = [tool1, "fork"];
const  ingredients = ["milk", "sugar", 4, tools];
console.log(ingredients[3]); //[ 'pan', 'fork' ]
console.log(ingredients[ingredients.length - 1]); //[ 'pan', 'fork' ]
console.log(ingredients[3][1]);//fork

ingredients.push("eggs")
console.log(ingredients);
ingredients.reverse();
console.log(ingredients.reverse());

// Boucles
//WHIlE = Tant que
// const limit = 100;
// let position = 0;
// while (position < limit) { 
//     console.log("You are not done!", position);
//     position = position + 1; //jusqu'a 99 + 1
// }
// console.log("END");

//FOR
for (let i = 1; i <= 10; i++ ) { 
    console.log("Boucle for : ", i);
}

for (let i = 0; i < limit; i++) {
    console.log("You are not done!", position);
    position = position + 1;

    const finished = true;
    if (finished) {

        break;
    }
    break;
    if () {

        continue;
    }
}   


const  ingredients = ["milk", "sugar"];
const  ingredient1 = "milk";
const  ingredient2 = "sugar";
console.log(ingredients.length);

const tool1 ="pan";
const tools = [tool1, "fork"];
const  ingredients = ["milk", "sugar", 4, tools, "bonjour"];
for (let j = 0; j < ingredients.length; j++) {
    console.log(ingredients[j]);
}