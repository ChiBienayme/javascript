
// 06 - Cakes
const cake = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

const soldOut = cake.filter(function(value) {
    if (value.flavor === 'chocolate') {
        return value.status = "sold out !" ;
    }
});
console.log(soldOut);