//Mars Rover
const prompt = require("prompt");
const axios = require("axios");

prompt.start();

const grid = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

// 2nd grille 'cachée' contenant les 100 pokémons
let pokemonGrid = [
  [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
  ],
  [
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
  ],
  [
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash",
    "nidoran-f",
    "nidorina",
  ],
  [
    "nidoqueen",
    "nidoran-m",
    "nidorino",
    "nidoking",
    "clefairy",
    "clefable",
    "vulpix",
    "ninetales",
    "jigglypuff",
    "wigglytuff",
  ],
  [
    "zubat",
    "golbat",
    "oddish",
    "gloom",
    "vileplume",
    "paras",
    "parasect",
    "venonat",
    "venomoth",
    "diglett",
  ],
  [
    "dugtrio",
    "meowth",
    "persian",
    "psyduck",
    "golduck",
    "mankey",
    "primeape",
    "growlithe",
    "arcanine",
    "poliwag",
  ],
  [
    "poliwhirl",
    "poliwrath",
    "abra",
    "kadabra",
    "alakazam",
    "machop",
    "machoke",
    "machamp",
    "bellsprout",
    "weepinbell",
  ],
  [
    "victreebel",
    "tentacool",
    "tentacruel",
    "geodude",
    "graveler",
    "golem",
    "ponyta",
    "rapidash",
    "slowpoke",
    "slowbro",
  ],
  [
    "magnemite",
    "magneton",
    "farfetchd",
    "doduo",
    "dodrio",
    "seel",
    "dewgong",
    "grimer",
    "muk",
    "shellder",
  ],
  [
    "cloyster",
    "gastly",
    "haunter",
    "gengar",
    "onix",
    "drowzee",
    "hypno",
    "krabby",
    "kingler",
    "voltorb",
  ],
];

// Position de départ du rover
let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

// Affiche la position du rover dans la grille
function displayPosition() {
  grid[rover.y][rover.x] = rover.direction;
}

// Affiche la grille dans le terminal
function displayGrid() {
  console.table(grid);
}

// Permet de tourner le rover vers la gauche
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      displayPosition();
      break;

    case "W":
      rover.direction = "S";
      displayPosition();
      break;

    case "S":
      rover.direction = "E";
      displayPosition();
      break;

    case "E":
      rover.direction = "N";
      displayPosition();
      break;
  }
  displayGrid();
}

// Permet de tourner le rover vers la droite
function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      displayPosition();
      break;

    case "E":
      rover.direction = "S";
      displayPosition();
      break;

    case "S":
      rover.direction = "W";
      displayPosition();
      break;

    case "W":
      rover.direction = "N";
      displayPosition();
      break;
  }
  displayGrid();
}

// Permet de faire avance le rover
function moveForward(rover) {
  rover.travelLog.push({ x: rover.x, y: rover.y });

  // GUARD pour limiter les déplacements dans la grille 10x10
  if (
    (rover.x === 0 && rover.direction === "W") ||
    (rover.x === 9 && rover.direction === "E") ||
    (rover.y === 0 && rover.direction === "N") ||
    (rover.y === 9 && rover.direction === "S")
  ) {
    return console.log("ERREUR : Le rover est sorti de la grille !");

    // Avance le rover en fonction de sa direction
  } else {
    switch (rover.direction) {
      case "N":
        rover.y--;
        displayPosition();
        grid[rover.y + 1][rover.x] = " ";
        break;

      case "E":
        rover.x++;
        displayPosition();
        grid[rover.y][rover.x - 1] = " ";
        break;

      case "S":
        rover.y++;
        displayPosition();
        grid[rover.y - 1][rover.x] = " ";
        break;

      case "W":
        rover.x--;
        displayPosition();
        grid[rover.y][rover.x + 1] = " ";
        break;
    }
    displayGrid();
  }
}

// Permet de faire reculer le rover
function moveBackward(rover) {
  rover.travelLog.push({ x: rover.x, y: rover.y });

  // GUARD limite les déplacements à la grille 10x10
  if (
    (rover.x === 0 && rover.direction === "E") ||
    (rover.x === 9 && rover.direction === "W") ||
    (rover.y === 0 && rover.direction === "S") ||
    (rover.y === 9 && rover.direction === "N")
  ) {
    return console.log("ERREUR : Le rover est sorti de la grille !");

    // Recule le rover en fonction de sa direction
  } else {
    switch (rover.direction) {
      case "N":
        rover.y++;
        displayPosition();
        grid[rover.y - 1][rover.x] = " ";
        break;

      case "E":
        rover.x--;
        displayPosition();
        grid[rover.y][rover.x + 1] = " ";
        break;

      case "S":
        rover.y--;
        displayPosition();
        grid[rover.y + 1][rover.x] = " ";
        break;

      case "W":
        rover.x++;
        displayPosition();
        grid[rover.y][rover.x - 1] = " ";
        break;
    }
    displayGrid();
  }
}

// Choisi un pokemon random parmis les 100
let randomPokemon = "";

function catchPokemon(randomId) {
  grid[0][0] = "N";
  console.table(grid);
  console.log("Chargement en cours...");

  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${randomId}`)
    .then((res) => {
      randomPokemon = res.data.name;

      // Instructions
      console.log(`Let\'s find ${randomPokemon.toUpperCase()} !!`);
      console.log(`Enter "l" (left) or "r" (right) to turn the rover`);
      console.log(`Enter "f" (forward) or "b" (backward) to move the rover`);

      // Lancement du jeu
      pilotRover();
    })
    .catch((err) => {
      console.log("ERROR!", err);
    });
}

// Permet de piloter le rover en fonction de l'ordre de l'utilisateur
function pilotRover() {
  // On récupère l'entrée de l'utilisateur
  prompt.get(
    { name: "letters", description: "Enter a letter" },
    function (err, res) {
      let commands = Object.values(res);

      // GUARD
      if (err) {
        console.log("ERREUR");
      }

      // Appelle les fonctions de direction et de déplacement
      for (let i = 0; i < commands.length; i++) {
        let command = commands[i];

        if (command === "l") {
          turnLeft(rover);
        } else if (command === "r") {
          turnRight(rover);
        } else if (command === "f") {
          moveForward(rover);
        } else if (command === "b") {
          moveBackward(rover);
        } else {
          console.log("Enter a valid command");
        }
      }

      // Si la position du rover === celle du pokemon random --> Gagné, fin du jeu
      if (pokemonGrid[rover.y][rover.x] === randomPokemon) {
        return console.log(
          `*** YOU CATCH ${randomPokemon.toUpperCase()} *** 
          \nPokedex is updating... You can put your cap back.
          \nPosition : X = ${rover.x}; Y = ${rover.y}`
        );
      }

      pilotRover();
    }
  );
}

catchPokemon(Math.floor(Math.random() * (100 - 1 + 1) + 1));