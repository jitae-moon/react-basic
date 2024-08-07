// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행(executor)
//     setTimeout(() => {
//         console.log('in promise');
//         // resolve("resolved!");
//         reject('rejected!');
//     }, 2000);
// });

// setTimeout(() => {
//     console.log(promise);
// }, 3000);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const num = 10;

//         if (typeof num === 'number') resolve(num + 10);
//         else reject('num이 숫자가 아닙니다.');
//     }, 2000);
// });

// then method
// promise.then((value) => {
//     console.log(value);
// });

// promise.catch((error) => {
//     console.log(error);
// });

// promise.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// })

function addTen(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === 'number') resolve(num + 10);
            else reject('num is not a number');
        });
    });

    return promise;
}

const p = addTen(10);

p.then((value) => {
    console.log(value);

    const p2 = addTen(value);
    // p2.then((value) => {
    //     console.log(value);
    // });

    return p2; // p.then()의 결과값이 p2가 됨
}).then((value) => {
    console.log(value);
});

addTen(10)
    .then((value) => {
        console.log(value);
        return addTen(value);
    })
    .then((value) => {
        console.log(value);
        return addTen(undefined);
    })
    .then((value) => {
        console.log(value);
        return addTen(value);
    })
    .catch((reason) => {
        console.log(reason);
    });

