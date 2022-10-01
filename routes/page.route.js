const express = require('express');
var mongoose = require('mongoose');
const router = express.Router();
const Page = require('../models/Page')

// create page route
router.post('/', async (req, res) => {
    const page = new Page({
        page: req.body.page
    });
    try{
    const savedPage = await page.save()
    res.json(savedPage);
    console.log(savedPage)
    }catch(err){
        res.json({message: err});
    }
});

// get page 
router.get('/', async (req, res) => {
    try{
        const page = await Page.find();
            res.json(page);
    }   catch(err){
            res.json({message: err});
    }
});
module.exports = router