let area = getArea(10, 20);
console.log(area);

// 호이스팅
// 함수 정의를 밑으로 내려도 상관없음

// 함수 선언
function getArea(width, height) {
    let area = width * height;

    return area;
}