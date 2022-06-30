// importing from script2.js
// const c = require("./script2");
import { largeNumber } from "./script2.js";

const a = largeNumber;
const b = 8;

// sets timmer to run console.log in 3s
setTimeout(() => {
    console.log(a,b);
}, 3000);
