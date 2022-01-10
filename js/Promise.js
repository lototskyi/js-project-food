const promise1 = new Promise((resolve, reject) => {
    setTimeout((data) => {
        console.log(`Promise 1 - ${data}`);
        resolve(data);
    }, 2000, '2000');
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout((data) => {
        console.log(`Promise 1 - ${data}`);
        resolve(data);
    }, 4000, '4000');
});

Promise.race([promise1, promise2]).then((values) => {
    console.log(values);
});


