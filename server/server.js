const path = require('path');
const express = require('express');

const app = express();

// const fileController = require('./controllers/fileController');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handler for requests for static files
app.use(express.static(path.resolve(__dirname, '../dist')));

//define route handlers here
app.use('/');

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
