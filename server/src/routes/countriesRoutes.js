const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countriesContoller');

router.get('/countries', countriesController.getAllCountries);
router.get('/countries/:id', countriesController.getCountryById);

module.exports = router;