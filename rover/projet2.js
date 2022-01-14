//Mars Rover
const prompt = require("prompt");

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

let rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

function displayPosition() {
  grid[rover.y][rover.x] = rover.direction;
}

function turnLeft(rover) {
    if (rover.direction === "N") {
        rover.direction = "W";
        displayPosition();

    } else if (rover.direction === "W") { 
        rover.direction = "S";
        displayPosition();

    } else if (rover.direction === "S") { 
        rover.direction = "E";
        displayPosition();

    } else if (rover.direction === "E") { 
        rover.direction = "N";
        displayPosition();
    }
}

function turnRight(rover) {
    if (rover.direction === "N") {
        rover.direction = "E";
        displayPosition();

    } else if (rover.direction === "E") { 
        rover.direction = "S";
        displayPosition();

    } else if (rover.direction === "S") { 
        rover.direction = "W";
        displayPosition();

    } else if (rover.direction === "W") { 
        rover.direction = "N";
        displayPosition();
    }
    
}

function moveForward(rover) {
    rover.travelLog.push({ x: rover.x, y: rover.y });
    if (rover.direction === "N") {
        rover.y--;
        displayPosition();
        grid[rover.y + 1][rover.x] = " ";

    } else if (rover.direction === "E") { 
        rover.x++;
        displayPosition();
        grid[rover.y][rover.x - 1] = " ";

    } else if (rover.direction === "S") { 
        rover.y++;
        displayPosition();
        grid[rover.y - 1][rover.x] = " ";

    } else if (rover.direction === "W") { 
        rover.x--;
        displayPosition();
        grid[rover.y][rover.x + 1] = " ";
    }
}

function pilotRover() {
  prompt.get(
    { name: "letters", 
    description: "Enter letters" },
    function (err, res) {
      let commands = Object.values(res);

      if (commands === undefined) {
        return console.log("Enter a valid command !");
      } else {
        for (let i = 0; i < commands.length; i++) {
          let command = commands[i];

          if (command === "l") {
            turnLeft(rover);
          } else if (command === "r") {
            turnRight(rover);
          } else if (command === "f") {
            moveForward(rover);
          }
        }
      }

      console.table(grid);
      pilotRover();
    }
  );
}

pilotRover();
