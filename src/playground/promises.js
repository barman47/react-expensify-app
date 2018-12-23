const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Ogechi',
            age: 19
        });
        //reject('Something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 5000);
    });
}).then((str) => {
    console.log('Does this run?', str);
}).catch((err) => {
    console.log('error: ', err);
});

console.log('after');