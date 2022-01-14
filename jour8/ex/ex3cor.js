//03 - Pokemon
const axios = require("axios");

function catchPokemon(idPokemon) {
    axios
        .get('https://pokeapi.co/api/v2/pokemon/')

        .then(function(res) {
            
            console.log(
                        `id: ${idPokemon}`,
                        `\nname: ${res.data.results[idPokemon -1].name}`
                        );

        })  
        .catch(function(err) {
            console.log("Error!");
        })
}

catchPokemon(2);
console.log("Hello");