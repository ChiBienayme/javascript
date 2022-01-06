//04 - Guess
const prompt = require("prompt");

prompt.start();

const mysteryNum = Math.floor(Math.random() * 100) + 1;

function play() {
    prompt.get(

        {name: "numUser",
         description: "Quel est le nombre mystere?"},

        function (err,res) {
            const numUser = parseInt(res.numUser);

            //null ou underfined === false
            if (err) {
                return console.log(err, "Something went wrong");
            }

            // isNaN = is not a number
            if (err || isNaN(res.numUser)) {
                console.log("Please enter a number");
                return play();
            }

            if (parseInt(res.numUser) === mysteryNum) {
                return console.log("Bravo"); 
            } else if (res.numUser > mysteryNum) {
                console.log("C'est moins");
            } else {
                console.log("C'est plus");
            } 
            play();
        }
    );
}
play();

//une fonction recursive: une fonction qui s'appelle elle-meme 
// Attention aux appels infinis (comme une boucle infinie)(pour les langages qui n'ont pas des boucles)
function hello() {
    console.log("Hello");
    hello();
}

function hello(nbHello, i) {
    if (i <= Hello) {
        console.log("Hello");
        hello(nbHello, i + 1);
    }
}
hello(4);

// function Callback
// facon 1
// function myCallback () {}
function login(cb) {
    console.log("User is logged in");
    const err = false;
    cb(err);
}
//prompt: function prompt(err, res)

// facon 2
login(function() {
    if (err) {
        return console.log("Failed to login, try again");
    }
    console.log("Welcome to our website! Enjoy");
});