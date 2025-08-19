//Node Files

// let n = 5;
// for(let i = 0; i < n; i++) {
//     console.log("hello", i);
// }
// console.log("bye");

//Process 

// let args = process.argv;

// for(let  i = 2; i < args.length; i++) {
//     console.log("hello", args[i]);
// }

//Module.Exports Files

// const math = require("./math");
// console.log(math.sum(2, 2));
// console.log(math.PI);

////Module.Exports Directory
// const info = require("./Fruits");
// console.log(info[0].name);

//require v/s import

import { sum, PI } from "./math.js";
import { generate } from "random-words";
// console.log(PI);
console.log(generate());