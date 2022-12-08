const express = require('express');

const refrigeneratorController = require('../controllers/refrigeneratorController');

const router = express.Router();

router.get('/', refrigeneratorController.getIngredients, (req, res) => {
  return res.status(200).json(res.locals.ingredients);
});

router.post('/', refrigeneratorController.postIngredient, (req, res) => {
  return res.status(200).json({});
});

module.exports = router;
