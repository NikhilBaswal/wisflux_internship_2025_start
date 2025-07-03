//The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
//To use the promise-based APIs:
const fs = require('fs');
//To use the callback and sync APIs:

fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data)            // this will be always at the end
})   
console.log("should be after the file content")

// if we want to display file content first then ...
const a=fs.readFileSync('file.txt')
console.log(a.toString());   //it will execute first 
console.log("hence this will be after the file execution ")

fs.writeFile('file2.txt',"this is 2 file data",()=>{
    console.log("written to the file") // this wiil also be always at the end
});

fs.writeFileSync('file2.txt',"this is data of 2 file",()=>{
    console.log("written")
})
console.log("finished reading file")