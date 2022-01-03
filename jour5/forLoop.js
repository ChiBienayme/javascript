//Boucle FOR
//01 - Somme des carrés
function total(num) {
    var sum = 0;
    for (var i = 5; i <= num; i++) {
        sum += i**2;
    }
    return sum;
}
console.log(total(10)); //355

//02 - Comptons
function multiple(num) {
    for (let i = 100; i <= 1000; i++) {
        if (i % 7 == 0) {
            console.log(i);
        }
    }
}
let result = num.length;
console.log(result.length);//128



//03 - Chanceux
//Lancez un dé 20 fois et affichez la somme de tout les résultats plus grand ou égale à 5

//04 - Des boites
var box1 = 12;
var box2 = 5;
for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1); //17
console.log(box2); //30
console.log(i); //14

// 05 - Des setiob
var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    // console.log(box1);
    box1 = box1 + i;
}
console.log(box1); //42
console.log(i); //0

// 06 - Encore des boites
var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        // console.log(box1 + i);
        box2++;
    } else {
        // console.log(box2 + i);
        box1--;
    }
}
console.log(box1); //-2
console.log(box2); //5
console.log(i); //-4






