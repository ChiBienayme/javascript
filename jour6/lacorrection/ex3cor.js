
// 03 - Validator

const prompt = require("prompt");

prompt.start();

function checkProfile() {
	prompt.get(
		[
			{
				name: "email",
				description: "What is your email?",
				required: true,
			},
			{
				name: "username",
				description: "What is your username?",
			},
			{
				name: "password",
				description: "What is your password?",
				hidden: true,
			},
		],
		function (err, res) {
			if (err) {
				return console.log("Something went wrong!", err);
			}

			const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			const usernameFormat = /^[A-Za-z0-9-]*$/;
			const passwordFormat =
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

			// Test user inputs with regex
			if (
				emailFormat.test(res.email) &&
				usernameFormat.test(res.username) &&
				passwordFormat.test(res.password)
			) {
				console.log("All good!");
			} else {
				console.log("Error");
			}
		}
	);
}

checkProfile();