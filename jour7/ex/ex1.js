//01 - File System
const fs = require("fs");

// read a file: jour07.txt
fs.readFile("jour07.txt", function (err, data) {
    if(err) {
        return console.log("Error",err);
    }
    console.log("Contenu du fichier:", data.toString());
});
