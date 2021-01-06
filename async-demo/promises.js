const p = new Promise((resolve, reject) => {

    // Kick off some async work
    // ...
    setTimeout(() => {
        // resolve(1);
        reject(new Error('message'));
    }, 2000);

    // resolve(1);

    // reject('error'); // bad practice and better use:
    // reject(new Error('message'));
});

p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));
