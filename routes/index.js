const router = require('express').Router();
const URL = require('../models/schema');
const connection_to_database = require('../check/check');
const express = require('express');


connection_to_database();

router.use(express.urlencoded({ extended: true }));  // For parsing form data
router.use(express.json());  // For parsing JSON data

router.get('/', async function(req,res){
    const urls = await URL.find();
    res.render('index',{
        title: 'Express',
        URLs: urls
    }
    );
})

router.post('/', async (req,res)=>{
    
    const {urlInput,aliasInput} = req.body;

    if(!urlInput || !aliasInput) {
        res.status(400).json({error : "both urls is required"});
    }

    try {
        const addedURL = new URL ({
            urlInput:urlInput,
            aliasInput: aliasInput,
        });

        await addedURL.save();

        const urls = await URL.find();
        res.render('index', {
            title: 'Express',
            URLs: urls,
        });
    } catch (err) {
        console.error("Error saving URL:", err);
        res.status(500).send("Error saving URL");
    }
})

module.exports = router;
