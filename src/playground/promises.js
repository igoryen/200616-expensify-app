const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data.');
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
});

console.log('after');