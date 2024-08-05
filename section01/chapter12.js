// 1. 함수 표현식
function funcA() {
    console.log('funcA');
}

let varA = funcA;
varA();

// 익명 함수
let varB = function funcB() { // funcB 생략 가능
    console.log('funcB');
};

// funcB()는 오류

let varC = function () {
    console.log('varC');
}

// 2. 화살표 함수
let varD = () => { // let varD = () => 1;과 동일
    return 1;
}
