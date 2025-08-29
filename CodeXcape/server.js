const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set the static directory to the current folder where this file is located.
// This assumes server.js is inside the 'CodeXcape' folder.
app.use(express.static(__dirname));

// Serve login.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
