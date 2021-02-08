// getCustomer(1, (customer) => {
//     console.log('Customer', customer);
//     if (customer.isGold) {
//         getTopMovies((movies) => {
//             console.log('Top movies: ', movies);
//             sendMail(customer.email, movies, () => {
//                 console.log('Email sent ...');
//             });
//         });
//     }
// });

// Async and await rewrite of abo
async function customerService() {
    try {
        const customer = await getCustomer(1);
        console.log('Customer', customer);

        if (customer.isGold) {
            const movies = await getTopMovies();
            console.log('Top movies: ', movies);
            await sendMail(customer.email, movies);
            console.log('Email sent ...');
        }
    }
    catch (err) {
        console.log('Error', err.message)
    }
}

customerService();

// function getCustomer(id, callback) {
//     setTimeout(() => {
//         callback({
//             id: 1,
//             name: 'Baba Meca',
//             isGold: true,
//             email: 'email@email.com'
//         });
//     }, 4000);
// }

// rewrite upper to return Promise instaed of using callbacks
function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Baba Meca',
                isGold: true,
                email: 'email@email.com'
            });
        }, 4000);
    });
}

// function getTopMovies(callback) {
//     setTimeout(() => {
//         callback(['movie1', 'movie2']);
//     }, 4000);
// }

// rewrite upper to return Promise instaed of using callbacks
function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    });
}

// function sendMail(email, movies, callback) {
//     setTimeout(() => {
//         callback();
//     }, 4000);
// }

// rewrite upper to return Promise instaed of using callbacks
function sendMail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
}