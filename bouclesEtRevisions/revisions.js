// 01 - Alphabet
function sortLetters(word) {
    console.log(word);
    var letters = word.split("");
    console.log(letters.sort().join(""));
}

function sortLetters2(word) {
    var letters = [];
    for (var i = 0; i < word.length; i++) {
        letters.push(word[i]);
    }
    console.log(letters.sort().join(""));
}

sortLetters("konnexio");

// 02 - XOXO
function countEach(word) {
    var countO = 0;
    var countX = 0;

    for (var i = 0; i < word.length; i++) {
        switch (word.charAt(i)) {
            case "x": {
                countX++;
                break;
            }
            case "o": {
                countO++;
                break;
            }
        }
    }

    return countO === countX;
}

console.log(countEach("xoxoxo"))

// 03 - Palindrome
//version 1
function checkPal(string) {
    const split = string.split("");
    let checkLetters = 0;

    for (let i = 0, j = split.length - 1; i <= split.length - 1; i++, j--) {
        if (split[i] === split[j]) {
            checkLetters +=1;
        }
    }

    if (checkLetters === split.length) {
        console.log("palidrome!");
    } else {
        console.log("Nope");
    }
}
checkPal("racecar");
checkPal("laptop");


//Version 2
function checkPal2(str) {
    let reversedStr = str.split("").reverse().join("");
    
    if (reversedStr === str) {
        return "palidrome!";
    } else {
        return "Nope";
    }
}
console.log(checkPal2("racecar"));
console.log(checkPal2("laptop"));

//version 3
function checkPal3(str) {
    return str.split("").reverse().join("") === str ? "palidrome" : "Nope";  
}
console.log(checkPal3("racecar"));
console.log(checkPal3("laptop"));


// 04 - Swap
function swap(sentence) {
    var swappedSentence = "";
    for (var i = 0; i < sentence.length; i++) {
        var letter = sentence.charAt(i);
        if (letter === letter.toUpperCase()) {
            swappedSentence += letter.toLowerCase();
        } else {
            swappedSentence += letter.toUpperCase();
        }
    }

    return swappedSentence;
}

console.log(swap("Hello World"));

// Bonus I

function makeItSpongeBob(word) {
    let newStr = "";

    for (let i = 0; i < word.length; i++) {
        if (i % 2 === 0) {
            newStr += word[i].toUpperCase();
        } else {
            newStr += word[i].toLowerCase();
        } 
    }
    newStr += " ";

    return newStr;
}
console.log(makeItSpongeBob("Javascript is easy"));

// Bonus II
function compare(letter1, letter2) {
    if (letter1.toLowerCase() > letter2.toLowerCase()) {
        return 1;
    } else if (letter1.toLowerCase() < letter2.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
}

function sortLetters(word) {
    return word.split("").sort(compare).join("");
}

console.log(sortLetters("Konnexio"));

// Bonus III
function countEach(word) {
    var countO = 0;
    var countX = 0;

    for (var i = 0; i < word.length; i++) {
        switch (word.charAt(i).toLowerCase()) {
            case "x": {
                countX++;
                break;
            }
            case "o": {
                countO++;
                break;
            }

            default: {
                return "Error, you have other letters than x and o !";
            }
        }
    }

    return countO === countX;
}

console.log(countEach("xoXoxo"))
console.log(countEach("abc"))

// Bonus IV