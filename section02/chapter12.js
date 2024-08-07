function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000);
}

// 결과값을 함수 외부에서 사용하고 싶을 때
add(1, 2, (value) => {
    console.log(value);
});

// 음식 주문 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = 'soup';
        callback(food);
    }, 3000);

}

function coolDownFood(food, callback) {
    setTimeout(() => {
        const cooledDownFood = `식은 ${food}`;
        callback(cooledDownFood);
    }, 2000);

}

function freezeFood(food, callback) {
    setTimeout(() => {
        const frozenFood = `냉동된 ${food}`;
        callback(frozenFood);
    }, 2000);

}

orderFood((food) => {
    console.log(food);
    coolDownFood(food, (cooledDownFood) => {
        console.log(cooledDownFood);
        freezeFood(food, (frozenFood) => {
            console.log(frozenFood);
        });
    });
})