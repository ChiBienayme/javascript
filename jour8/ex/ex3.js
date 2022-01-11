//03 - Pokemon
const axios = require("axios");

axios.get('https://pokeapi.co/api/v2/pokemon/3/')

.then(function(catchPokemon) {
    
        console.log({
                    id: catchPokemon.data.id,
                    name: catchPokemon.data.name
                })  
     
})
.catch(function(err) {
    console.log("Error!");
})
// { id: 1, name: 'stench' }
// { id: 2, name: 'drizzle' }


// const axios = require("axios");

// axios.get(" https://pokeapi.co/api/v2/pokemon/3").then(function (catchPokemon) {
//     console.log(`id: ${catchPokemon.data.id}, name: ${catchPokemon.data.name}`);
// });