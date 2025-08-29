const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set the static directory to 'codexcape'
app.use(express.static(path.join(__dirname, 'CodeXcape')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
