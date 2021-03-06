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

let pokemonGrid = [[], [], [], [], [], [], [], [], [], []];

function pushPokemon() {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=100`)
    .then((res) => {
      let pokemons = res.data.results.map((pokemon) => {
        return pokemon.name;
      });

      for (let i = 0; i < 10; i++) {
        for (let k = 0; k < 10; k++) {
          pokemonGrid[i].push(pokemons[k]);
        }
      }
    });
}

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

  // GUARD pour limiter les d??placements dans la grille 10x10
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

  // GUARD limite les d??placements ?? la grille 10x10
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

function catchPokemon(randomId) {
  console.log("Chargement en cours...");

  axios
    .get(`https://pokeapi.co/api/v2/pokemon-species/${randomId}`)
    .then((res) => {
      const randomPokemon = res.data.name;

      // Permet de piloter le rover en fonction de l'ordre de l'utilisateur
      function pilotRover() {
        // On r??cup??re l'entr??e de l'utilisateur
        prompt.get(
          { name: "letters", description: "Enter letters" },
          function (err, res) {
            let commands = Object.values(res);

            // GUARD
            if (err) {
              console.log("ERREUR");
            }

            // Appelle les fonctions de direction et de d??placement
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

            if (rover.x === randomPokemon.x && rover.y === randomPokemon.y) {
              return console.log("*** YOU WIN ***");
            }
          }
        );
      }
      pilotRover();
    })
    .catch((err) => {
      console.log("ERROR!", err);
    });
}

pushPokemon();
catchPokemon(Math.floor(Math.random() * (100 - 1 + 1) + 1));
