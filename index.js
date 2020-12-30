const fs = require("fs");
// new file create with index.js name
fs.writeFileSync("index.txt", "helloworld");

// update data from index.js
fs.appendFileSync("index.txt", "hello how are u?");

// read file data in string form if not use toString() data read in buffer mode
let buffdata = fs.readFileSync("index.txt").toString();

console.log("buffdata", buffdata);
