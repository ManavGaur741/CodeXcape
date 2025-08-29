const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set the static directory to 'codexcape'
app.use(express.static(path.join(__dirname, 'CodeXcape')));

// Serve login.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'CodeXcape', 'login.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
