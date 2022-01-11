//02 - Chuck Norris
const axios = require("axios");


    axios.get('https://api.chucknorris.io/jokes/random')
    .then(function(getFact) {

        console.log({fact: getFact.data.value});
    })
    .catch(function(err) {
        console.log("Error!");
    })