const db = require('../models/refrigeneratorModels');

const refrigeneratorController = {};

// query the database on a GET request for ingredients
refrigeneratorController.getIngredients = async (req, res, next) => {
  // add code for SQL query here
  const SQLQuery = 'SELECT * FROM ingredients';

  db.query(SQLQuery)
    .then((queryResults) => {
      console.log('queryResults is: ', queryResults.rows);
      res.locals.ingredients = queryResults.rows;
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

refrigeneratorController.postIngredient = (req, res, next) => {
  const { item, type, quantity, unit, date } = req.body;
  // this is a test post delete when done

  const SQLQuery = `
  INSERT INTO ingredients (item, type, quantity, unit, date)
  VALUES ($1, $2, $3, $4, $5)`;

  const params = [item, type, quantity, unit, date];
  db.query(SQLQuery, params)
    .then((queryData) => {
      console.log('posting completed! returned data from INSERT: ', queryData);
      return next();
    })
    .catch((err) =>
      next({
        log: 'refrigeneratorController.postIngredient: ERROR: Issue posting to database.',
        status: 500,
        message: { err },
      })
    );
};

refrigeneratorController.deleteIngredient = (req, res, next) => {
  console.log('delete fired');
  const { id } = req.body;
  // this is a test post delete when done
  console.log('id in MW is: ', id);
  const SQLQuery = `
  DELETE FROM ingredients
  WHERE id=$1`;

  const params = [id];
  db.query(SQLQuery, params)
    .then((queryData) => {
      console.log('deletion completed! returned data from INSERT: ', queryData);
      return next();
    })
    .catch((err) =>
      next({
        log: 'refrigeneratorController.deleteIngredient: ERROR: Issue deleting from database.',
        status: 500,
        message: { err },
      })
    );
};

module.exports = refrigeneratorController;
