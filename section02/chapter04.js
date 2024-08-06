// 1. Spread 연산자
// 객체, 배열에 저장된 여러 개의 값을 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2
}

let obj2 = {
    c: 3,
    ...obj1,
    d: 4
}

console.log(obj2);

function funcA(p1, p2, p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

funcA(...arr1);

function funcB(one, ...rest) {
    console.log(rest);
}

funcB(...arr1);