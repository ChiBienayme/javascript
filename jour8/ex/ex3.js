//03 - Pokemon
const axios = require("axios");

axios.get('https://pokeapi.co/api/v2/ability/1/')

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