// index.js

const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// Define a route that reads and sends the contents of a file
app.get('/', (req, res) => {
  const filePath = 'app.js';

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.send(`File contents:\n${data}`);
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
