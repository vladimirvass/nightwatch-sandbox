console.log('Before');

// getUser(1, (user) => {
//     console.log('User', user);

//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('Repos', repos);

//         getCommits(repos[0], (commits) => {
//             console.log('Repo', commits);
//         });
//     });
// });

/*
const p = getUser(1);
p.then(user => console.log(user));
*/

// simplify
getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));

// Async and await approach
const user = await getUser(1);
const repo = await getRepositories(user.gitHubUsername);
const commit = await getCommits(repos[0]);
console.log(commits);

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        // Kick off some async work
        setTimeout(() => {
            console.log('Reading a user from a DB ...');
            resolve({ id: id, gitHubUsername: 'userOne' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        // async activity
        setTimeout(() => {
            console.log('Calling GitHub API ...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        // async
        setTimeout(() => {
            console.log('Getting all commits in this repo...');
            resolve(['commit1', 'commit2', 'commit3']);
        }, 2000);
    });
}
