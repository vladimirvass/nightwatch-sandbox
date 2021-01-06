console.log('Before');
getUser(1, (user) => {
    console.log('User', user);

    getRepositories(user.gitHubUsername, (repos) => {
        console.log('Repos', repos);

        getCommits(repos[0], (commits) => {
            console.log('Repo', commits);
        });
    });
});
console.log('After');


console.log('Before');
getUser(1, displayUser);
console.log('After');

function displayCommits(commits) {
    console.log(commits);
}

function displayRepos(repos) {
    getCommits(repo, displayCommits);
}

function displayUser(user) {
    getRepositories(user.gitHubUsername, displayRepos);
}

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
