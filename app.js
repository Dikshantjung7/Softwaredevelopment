// app.js

const express = require('express');
const app = express();
const port = 3001; 

app.get('/', (req, res) => {
  res.send('Hello from app.js!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
