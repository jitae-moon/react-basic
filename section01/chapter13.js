// 1. 콜백함수
function main(value) {
    console.log(value);
    value();
}

function sub() {
    console.log('sub is called');
}

main(sub); // sub -> 콜백함수(다른 함수의 인자로 전달된 함수)

main(function () {
    console.log('function expression');
    
})

main(() => {
    console.log('function expression');
    
})

// 2. 콜백함수 활용
function repeat(count, callback) {
    for (let i = 1; i <= count; i++) {
        callback(i);
    }
}

repeat(5, function (idx) {
    console.log(idx);
});

repeat(5, function (idx) {
    console.log(idx * 2);
})

repeat(5, (idx) => console.log(idx * 3));