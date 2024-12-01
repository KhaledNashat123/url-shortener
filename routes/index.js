const router = require('express').Router();
const schema = require('../models/schema');
const connection_to_database = require('../check/check');

connection_to_database();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
