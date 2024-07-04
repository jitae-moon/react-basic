// 묵시적 형변환
let num = 10;
let str = "20";

const result = num + str;
console.log(result);

// 명시적 형변환
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);

let num1 = 20;
let numToString = String(num1);