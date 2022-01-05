const prompt = require("prompt");
// console.log(prompt);

prompt.start();

//Callback
prompt.get("Your email", function(err, res) {
    if (err) {
        return console.log("Error with prompt");
    }
    console.log(res);
});



// const ingredients = ["flour", "butter", "sugar"];
// // console.log(ingredients.push("milk")); 
// ingredients.forEach(function (element) {
//     console.log(element);
// });