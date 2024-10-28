require('dotenv').config(); // Load the environment variables from the .env file
const express = require('express'); // Import the Express module
const app = express(); // Create an instance of an Express application
const port = 4000; // Define the port number the server will listen on

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

app.listen(process.env.PORT, () => { // Make the app listen on the specified port
    console.log(`Example app listening at http://localhost:${port}`); // Log a message to the console when the server starts
});
