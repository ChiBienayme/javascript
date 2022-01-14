//REQUETES = la demande
// https://restcountries.com/
const axios = require("axios");

// **** axios.get() ****** //
// take all countries, then: terminer
// axios.get("https://restcountries.com/v3.1/all").then(function(res) {
//     console.log(res.data);
// });

// NAME: only 1 country
// axios.get("https://restcountries.com/v3.1/name/france").then(function(res) {
//     console.log(res.data);
// });

// Take info of Vietnam
// axios.get("https://restcountries.com/v3.1/name/vietnam").then(function(res) {
//     console.log(res.data);
// });

// Take the name of capital
axios.get("https://restcountries.com/v3.1/name/japan").then(function(res) {
    console.log(res.data[0].capital[0]);
    console.log("Hey!"); //Tokyo Hey!
});
//console.log("Hey!"); //Hey! Tokyo

// la page html de google
// axios.get("https://google.com").then(function(res) {
//     console.log(res.data);
// });

// json placeholder
// axios.get("https://jsonplaceholder.typicode.com/users").then(function(res) {
//     console.log(res.data);
// });

// if is it a fault in permalink, we use "catch"
// axios.get("https://restcountries.com/v3.1/all")
// .then(function(res) {
//     console.log(res.data);
// })
// .catch(function(err) {
//     console.log("Une erreur est survenue dans la requête!");
// })



// different endpoints
// http://google.com
// http://google.com/welcome
// http://google.com/about/staff

// axios.post()
// axios.put()
// axios.delete()
