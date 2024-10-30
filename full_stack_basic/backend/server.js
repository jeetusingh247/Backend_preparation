import express from 'express';

const app = express();

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//   res.send('Server is ready');
// });

// get a list of 5 joke
app.get('/api/jokes', (req, res) => {
  res.send([
    {
      id: 1,
      title: 'What do you call a very small valentine? A valen-tiny!',
    },
    {
      id: 2,
      title: 'What did the dog say when he rubbed his tail on the sandpaper? Rough, rough!',
    },
    {
      id: 3,
      title: "Why don't sharks like to eat clowns? Because they taste funny!",
    },
  ]);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});