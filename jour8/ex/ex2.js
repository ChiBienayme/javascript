//02 - Chuck Norris
const axios = require("axios");

const countriesNames = [];

axios.get(" https://api.chucknorris.io/")
.then(function(res) {

        countriesNames = res.data
            .map(function(getFact) {
                 return getFact.Math.floor(Math.random() * + ); 
            });

        console.log(countriesNames);
})