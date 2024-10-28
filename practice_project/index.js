require('dotenv').config(); // Load the environment variables from the .env file
const express = require('express'); // Import the Express module
const app = express(); // Create an instance of an Express application
const port = 4000; // Define the port number the server will listen on

const githubData = {
    "login": "jeetusingh247",
    "id": 143892753,
    "node_id": "U_kgDOCJOhEQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/143892753?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/jeetusingh247",
    "html_url": "https://github.com/jeetusingh247",
    "followers_url": "https://api.github.com/users/jeetusingh247/followers",
    "following_url": "https://api.github.com/users/jeetusingh247/following{/other_user}",
    "gists_url": "https://api.github.com/users/jeetusingh247/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/jeetusingh247/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/jeetusingh247/subscriptions",
    "organizations_url": "https://api.github.com/users/jeetusingh247/orgs",
    "repos_url": "https://api.github.com/users/jeetusingh247/repos",
    "events_url": "https://api.github.com/users/jeetusingh247/events{/privacy}",
    "received_events_url": "https://api.github.com/users/jeetusingh247/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Jeetu Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 16,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-09-02T15:20:28Z",
    "updated_at": "2024-10-19T13:00:16Z"
};

app.get('/', (req, res) => { // Define a route handler for the root URL ('/')
    res.send('Hello World!'); // Send 'Hello World!' as the response
});

app.get('/twitter', (req, res) => {
    res.send('This is the Twitter page');
});

app.get('/login', (req, res) => {
    res.send('<h1>This is the login page</h1>');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>This is the YouTube page</h2>');
});

app.get('/github', (req, res) => {
    res.json(githubData);
});

app.listen(process.env.PORT, () => { // Make the app listen on the specified port
    console.log(`Example app listening at http://localhost:${port}`); // Log a message to the console when the server starts
});
