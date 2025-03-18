const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/new-feature', (req, res) => {
  res.json({ message: 'This is the new feature!' });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});