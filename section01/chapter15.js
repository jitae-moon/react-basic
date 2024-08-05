// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티(속성)
let person = {
    name: "moon",
    age: 29,
    hobby: "tennis",
    key: {},
    key2: function () { },
    10: 20
};

// 3. 객체 프로퍼티 다루는 방법
// 1) 접근 방법(점, 괄호)
let name = person.name; // 존재하지 않는 프로퍼티이면 undefined 반환
let age = person['age'];
console.log(age);

let property = 'hobby';
let hobby = person[property];
console.log(hobby);

// 2) 새로운 프로퍼티 추가
person.job = 'engineer';
person['skill'] = 'java';

// 3) 프로퍼티 수정
person.job = 'mechanic';
person['skill'] = 'c';

// 4) 프로퍼티 삭제
delete person.job;
delete person['skill'];
console.log(person);

// 5) 프로퍼티 존재 유무 확인
let result = 'skill' in person;
console.log(result);
