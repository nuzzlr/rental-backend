const express = require('express');
const Person = require('../models/Person');
const router = express.Router();



router.post('/', async(req, res)=>{
    try{
        console.log(req)
        const data = req.body
        const newPerson = new Person(data);
        console.log(data)
        console.log(newPerson)
        const response = await newPerson.save();
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

module.exports = router;
