
let inputs = readline().split(" ");
let lightX = parseInt(inputs[0]);
let lightY = parseInt(inputs[1]);
let initialTX = parseInt(inputs[2]);
let initialTY = parseInt(inputs[3]);
let thorX = initialTX;
let thorY = initialTY;

// une boucle infinie pour le démarrage du jeu
while (true) {
	var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
	let directionX = "";
	let directionY = "";

	if (thorX > lightX) {
		directionX = "W";
		thorX--;
	} else if (thorX < lightX) {
		directionX = "E";
		thorX++;
	} else {
		directionX = "";
	}

	if (thorY > lightY) {
		directionY = "N";
		thorY--;
	} else if (thorY < lightY) {
		directionY = "S";
		thorY++;
	} else {
		directionY = "";
	}

	console.log(directionY + directionX);
}
