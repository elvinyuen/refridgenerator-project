const db = require('../models/refrigeneratorModels');

const refrigeneratorController = {};

// query the database on a GET request for ingredients
refrigeneratorController.getIngredients = (req, res, next) => {
  // add code for SQL query here
  const SQLQuery = 'SELECT';

  db.query(SQLQuery)
    .then((queryResults) => {
      res.locals.characters = queryResults.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'refrigeneratorController.getIngredients: ERROR: Issue querying database.',
        status: 500,
        message: { err },
      })
    );
};

module.exports = refrigeneratorController;
