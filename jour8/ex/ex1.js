// 01 - Countries

const axios = require("axios");

axios.get("https://restcountries.com/v3.1/all")
.then(function(res) {

        const countriesNames = res.data
            .map(function(getCountries) {
                 return getCountries.name.common; 
            });

        console.log(countriesNames.join(" - "));
})
.catch(function(err) {
    console.log("Error!");
})





