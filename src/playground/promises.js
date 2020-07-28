const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Igor',
            age: 46
        });
        reject('Something went wrong!')
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
            // reject('Something went wrong!')
        }, 3000);
    });
}).then((str) => {
    console.log('does this run?', str)
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');