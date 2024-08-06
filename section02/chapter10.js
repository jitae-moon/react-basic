// Date
let date1 = new Date();
console.log(date1);

let date2 = new Date('2024-08-05');
console.log(date2);

// Timestamp
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date4);

// 시간 요소 추출 방법
let year = date1.getFullYear();
let month = date1.getMonth(); // 0부터 시작
let date = date1.getDate();

// 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2); // 3월
date1.setDate(29);

// 시간 포맷
console.log(date1.toDateString());
console.log(date1.toLocaleString());