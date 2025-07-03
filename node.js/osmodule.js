//The 'node:os' module provides operating system-related utility methods and properties. It can be accessed using:
const os = require('node:os');
console.log("hi nikhil this side");
console.log(os.EOL);     // so EOL(end of line ). it provides a kind of one line space in js code
console.log("i am an ai engineer");
console.log(os.availableParallelism());
console.log(os.arch());
console.log(os.cpus());
console.log(os.freemem()); 
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.release());

// for more modules you can go to chrome:- node.js documentation/os