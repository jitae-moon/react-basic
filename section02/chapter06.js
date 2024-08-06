// 1. 배열 순회
let arr = [1, 2, 3];

// 인덱스 순회
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// for of
let arr2 = [4, 5, 6, 7, 8];
for (let i of arr2) {
    console.log(i);
}

// 2. 객체 순회
let person = {
    name: 'moon',
    age: 27,
    hobby: 'tennis'
}

// Object.keys
let keys = Object.keys(person);
console.log(keys);

for (let key of keys) {
    const value = person[key];
}

// Object.values
let values = Object.values(person);
console.log(values);

// for in
for (let key in person) {
    console.log(person[key]);
}