/***** OBJECTS ******/

const key = "firstname";

//const user = ["John", "Doe", 50, "France", "Paris"];

const user = {
	firstname: "John",
	lastname: "Doe",
	age: 50,
	address: {
		country: "France",
		city: "Paris",
		floor: 4,
	},
	favoriteFood: ["nutella", "brocoli"],
};

console.log(user.firstname);
console.log(user["lastname"]);
console.log(user[key]);
console.log(user["address"]["floor"]);
console.log(user.favoriteFood[1]);
console.log(user.address.city);

const friends = [
	{
		username: "Mary",
		lastname: "Doe",
	},
	{
		username: "Jane",
		lastname: "Doe",
	},
];

for (let i = 0; i < friends.length; i++) {
	// const oneFriend = friends[i];
	// console.log(oneFriend.username);
	console.log(friends[i].username);
}

console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));

const keys = Object.keys(user);
// On obtient : [ 'firstname', 'lastname', 'age', 'address', 'favoriteFood' ]

for (let i = 0; i < keys.length; i++) {
	console.log(keys[i], user[keys[i]]);
}


/***** FONCTIONS ******/
function sayHello() {
    // console.log("Hello");
    // console.log("How are you?");
    let x = 22;
    x++;
    console.log("x dans la fonction: ", x);
}
sayHello();
sayHello();


function add(a, b, c, d) {
    console.log(a + b + c + d); 
}
add(5, 8, 7, 9)
add(1, 2)

const n = 8;
add(5, n, 7, 9)
add(1, 2)

function doSomething(array) {
    array.push(3);
}
const tab = [1, 2]
doSomething(tab)
console.log(tab);

function increment(a) {
    a++
    console.log("a:", a);
}
const y = 1;
increment(y);
console.log(y);

// add 2 numbers and return the result
function addNumbers(a, b) {
    const res = a+ b;
    return res;
}
const addedNumbers = addNumbers(3, 4);
console.log(addedNumbers);

