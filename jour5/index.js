console.log(process.argv[2]);

function sayHello(name) {
    console.log("Hello" + name);
}
sayHello(process.argv[2]);