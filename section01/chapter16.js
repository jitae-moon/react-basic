// 1. 상수 객체
const animal = {
    type: 'cat',
    age: 4,
    color: 'black'
};

animal.age = 3; // 객체 프로퍼티에 대한 수정, 삭제는 가능

console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티
const person = {
    name: 'moon',
    sayHello: function () { // 메서드
        console.log('hello, world!');
    }, 
    // 메서드 선언
    hello() {
        console.log('method declaration');
    }
}
