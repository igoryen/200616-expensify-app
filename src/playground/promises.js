const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Igor',
            age: 46
        });
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
});

console.log('after');