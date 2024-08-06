// 5가지 배열 변형 메서드
// filter
let arr1 = [
    {name: 'test1', hobby: 'golf'},
    {name: 'test2', hobby: 'tennis'}
];

const tennis = arr1.filter((value) => {
    if (value.hobby === 'tennis') return true;
});
console.log(tennis);

const tennis2 = arr1.filter(value => value.hobby === 'tennis');
console.log(tennis2);

// map
let arr2 = [1, 2, 3];
const after = arr2.map(value => value * 2);
console.log(after);

let names = arr1.map(value => value.name);
console.log(names);

// sort
let arr3 = ['b', 'a', 'c'];
arr3.sort();
console.log(arr3);

let arr4 = [10, 32, 12, 5];
console.log(arr4.sort());
arr4.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
});
console.log(arr4);

let arr5 = [1, 14, 23, 42, 111, 23];
arr5.sort((a, b) => a - b);
console.log(arr5);

// toSorted
let arr6 = ['c', 'a', 'b'];
const sorted = arr6.toSorted();
console.log(arr6);
console.log(sorted);

// join
let arr = ['hi', 'hello', 'world'];
const joined = arr.join('-');
console.log(joined)