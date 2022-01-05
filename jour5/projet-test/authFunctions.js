function login() {
    console.log("You are connected!");
}

function logout() {
    console.log("You are disconnected!");
}

function register() {
    console.log("You info is saved!");
}

// module.exports = login;

module.exports = {
    login,
    logout,
    register,
};

const obj = {
    name: "Jean",
    sayHello:function (){ 
    },
    age: 29
}
obj.sayHello;
