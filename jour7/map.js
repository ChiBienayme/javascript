/** MAP **/
//map: doubles les numeros
const numbers = [1, 2, 3, 4, 5];

const doubles = numbers.map(function(num) {
    //map doit return obligatoirement
    return num * 2;
});
console.log(numbers, doubles); //[ 1, 2, 3, 4, 5 ] [ 2, 4, 6, 8, 10 ]


//V1, sans map
const users = [
    { name: "Caroline"},
    { name: "Lysiane"},
    { name: "Nicolas"}
];
const htmlUsers =[];
// const htmlUsers = ["<p>Caroline</p>","<p>Lysiane</p>", "<p>Nicolas</p>" ];
for (let i = 0; i < users.length; i++) {
    htmlUsers.push(`<p>${users[i].name}</p>`)
}
console.log(htmlUsers); //[ '<p>Caroline</p>', '<p>Lysiane</p>', '<p>Nicolas</p>' ]

// V2, avec map
const users = [
    { name: "Caroline"},
    { name: "Lysiane"},
    { name: "Nicolas"}
];
const htmlUsers = users.map(function(user) {
    return `<p>${user.name}</p>`;
})
console.log(htmlUsers); //[ '<p>Caroline</p>', '<p>Lysiane</p>', '<p>Nicolas</p>' ]
