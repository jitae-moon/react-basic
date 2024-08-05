// Scope
// 전역 vs 지역
let a = 1; // Global

function funcA() {
    let b = 2; // Local
    function funcB() {} // 반복문에서는 local 아님
}