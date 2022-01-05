//import the library lodash
const lodash = require("lodash"); //le nom de librairie qu'on veut
console.log(lodash);

lodash.zip();

//import the library bcrypt
const bcrypt = require("bcrypt");
console.log(bcrypt);

//import login.js
const authFunctions = require("./authFunctions");
console.log(authFunctions);
// login()
authFunctions.login();
authFunctions.logout();
authFunctions.register();

//import un tableau
const alphabet = require("./alphabet");
