const fs = require("fs");

// read a file: test.txt
fs.readFile("test.txt", function (err, data) {
    if(err) {
        return console.log("Error",err);
    }
    // toString pour passer les donnees d'hexadecimal a l'alphabet normal
    console.log("Contenu du fichier:", data.toString());
});

//remplacer le contenue test.txt
fs.writeFile("test.txt", "How are you?", function(err) {
    if (err) {
        return console.log("Error!!", err);
    }
});

//version 2
const toWrite ="How are you?";
fs.writeFile("test.txt", toWrite, function(err) {
    if (err) {
        return console.log("Error!!", err);
    }
});

//version 3
const toWrite ="How are you?";
const username = "Paul";
fs.writeFile("test.txt", username === "Paul" ? "Paul" : "Marc", function (err) {
    if (err) {
        return console.log("Error!!", err);
    }
});

//ajout a la suite : Hello World! How are you
fs.appendFile("test.txt", "How are you ", function (err) {
    if (err) {
        return console.log("Error!!", err);
    }
});

//Stat

fs.stat("test.txt", function (err, stats) {
    if (err) {
        return console.error("Error!!",err);
    }
    // 1 554 987 octets = 1.5 mo
    console.log(stats);
    console.log("Et voilà ! Voyons le résultat");
    
      if (stats.isFile()) { // simplification de  if (stats.isFile() === true)
          console.log("C'est un fichier !");
      }
 
      if (stats.isDirectory()) { // simplification de  if (stats.isDirectory() === true)
          console.log("C'est un dossier !");
      }  
 });