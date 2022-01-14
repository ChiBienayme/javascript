// 03 - Map Names
const longNames = [
  {
    firstName: "Jane",
    lastName: "Doe",
  },
  {
    firstName: "John",
    lastName: "Smith",
  },
];
const shortNames = longNames.map(function (longName) {
  return {
    name : `${longName.firstName} ${longName.lastName}`,
  };
    
});

console.log(shortNames);
