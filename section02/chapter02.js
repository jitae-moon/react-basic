function returnFalse() {
    console.log('returnFalse() called');
    
    return false;
}

function returnTrue() {
    console.log('returnTrue() called');
    return true;
}

function returnUndefined() {
    console.log('returnUndefined() called');
    return undefined;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() || returnFalse());
console.log(returnUndefined() && returnTrue()); // 연산값이 truthy or falsy한 값 그대로 됨

// 단락 평가(short circuit) 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || 'person에 값이 없음');
}