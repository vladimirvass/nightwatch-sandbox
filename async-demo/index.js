///////// 1 - sync vs async ///////////
/*
console.log('Before');

// After 2 sec, the function inside the setTimeout will be executed
setTimeout(() => {
    console.log('Reading a user from DB ...')
}, 2000);

console.log('After'); 
*/
///////// 2 - undefined///////////

/*
console.log('Before');

// Next call will return undefined because will be exeuted without waiting the result of setTimeout
const user = getUser(1);
console.log(user);
console.log('After');

// There are three ways of dealing with this undefined
// Callbacks
// Promises
// Async/await

function getUser(id) {
    setTimeout(() => {
        console.log('Reading a user from a database ....')
        return { id: id, gitHubUsername: 'userOne'}
    }, 2000);
}
*/
///////// 3 - callback ///////////

// Asynchronous
console.log('Before');
getUser(1, (user) => {
    console.log('User', user);

    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);

        getCommits(repos[0], (commits) => {
            console.log('Repo', commits);

            // All these nested callbacks are called: CALLBACK HELL (or Christmas tree problem)
        });
    });
});
console.log('After');

// Synchronous
console.log('Before');
const user = getUser(1);
const repos = getRepositories(user.gitHubUsername);
const commits = getCommits(repos[0]);
console.log('After');


function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a DB ...');
        callback({ id: id, gitHubUsername: 'userOne' });
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Getting repos....');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Getting all commits in this repo...');
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}
