function login(name, cb) {
    console.log(name + "is connected!");
    cb(true);
}
function myCallback() {
    console.log("La fonction de login est terminee");
}
//facon 1
// login("Chi", myCallback);

//facon 2 (avec une fonction anonyme)
// login("Chi", function() {
//     console.log("La fonction de login est terminee");
// });

login("Chi ", function(err) {
    if (err) {
        return console.log("Un problem est survenu");
        
    }

    console.log("Bienvenue sur notre site");
});