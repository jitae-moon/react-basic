// const moduleData = require("./math");
// const {add, sub} = require("./math");
import {add, multiply} from "./math.js";
import subtract from "./math.js"; // default export, 이름은 상관없음(sub도 가능)
// import subtract, {add, multiply} from "./math.js";

// console.log(moduleData);
// console.log(moduleData.add(3, 4));
// console.log(moduleData.multiply(3, 4));
console.log(add(1, 2));
