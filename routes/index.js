const router = require('express').Router();
const schema = require('../models/schema');
const connection_to_database = require('../check/check');

connection_to_database();

router.get('/', async function(req,res,next){
    const urls = await schema.find();
    res.render('index',{
        title: 'Express',
        URLs: urls
    }
    );
})

module.exports = router;
