// 6가지 요소 조작 메서드

// push
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5);

// pop
const poppedItem = arr1.pop();

// shift
const shiftedItem = arr1.shift();

// unshift
const lengthAfterUnshift = arr1.unshift(0);

// slice
let arr2 = [1, 2, 3, 4, 5];
let sliced = arr2.slice(2, 5);
let sliced2 = arr2.slice(-3);
console.log(sliced);
console.log(arr2);
console.log(sliced2);

// concat
let arr3 = [1, 2, 3];
let arr4 = [4, 5];
let concatArr = arr3.concat(arr4);
console.log(concatArr);