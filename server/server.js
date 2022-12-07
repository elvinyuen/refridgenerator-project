const path = require('path');
const express = require('express');

const app = express();

// require / import the controller file
const refrigeneratorController = require('./controllers/refrigeneratorController');

// declare the server port and assign 3000
const PORT = 3000;

// parse JSON from incoming request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// request handler for static files
app.use(express.static(path.resolve(__dirname, '../src')));

//define route handlers here
app.get('/api', (req, res) => res.status(200).json(res.locals.ingredients));
// app.use('/', (req, res) => {
//   res.status(200).json(res.locals.ingredients);
// });

//catch-all router handler for any requests to an unknown route (404)
app.use('*', (req, res) =>
  res.status(404).send('Oops... the fridge has been running and is not here...')
);

// express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start live server on port 3000
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
