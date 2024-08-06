// 5가지 요소 순회 및 탐색 메서드

// forEach
let arr = [1, 2, 3];
arr.forEach(function (value, idx, arr) {
    console.log(value, idx, arr);
})

// includes
let arr2 = [1, 2, 3];
let isIncluded = arr2.includes(3);
console.log(isIncluded);

// indexOf
let arr3 = [1, 2, 3];
let idx = arr3.indexOf(2);
console.log(idx);

// findIndex - 객체값 비교할 때 특히 유용(깊은 비교)
let arr4 = [1, 2, 3];
const foundIndex = arr4.findIndex((item) => {
    if (item === 2) return true;
});

console.log(foundIndex);

// find
let arr5 = [
    {name: 'test1'},
    {name: 'test2'}
]

let foundValue = arr5.find((value) => {
    if (value.name === 'test1') return true;
})

console.log(foundValue);