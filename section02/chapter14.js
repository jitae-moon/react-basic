// async
// 함수가 promise를 변환하도록 해줌
async function getData() {
    // return {
    //     name: 'test',
    //     id: 'hello-test'
    // };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'test',
                age: 17
            });
        }, 2000);
    });
}

console.log(getData());

// await
// async 내부에서만 사용 가능
// 비동기함수 처리되기를 기다림

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();