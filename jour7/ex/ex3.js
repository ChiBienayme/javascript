// 03 - Map Names
const longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];
const shortNames = longNames.map(function(name) {
    return `{name: ${name.firstName} ${name.lastName}}`;
});

console.log(shortNames);



