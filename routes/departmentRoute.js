"use strict";

const express = require('express');
const router = express.Router();

const departController = require('../controllers/departmentController');

router.post('/', async (req , res) => {
    try{
        const departObj = await departController.createDepartment(req.body);
        console.log(departObj);
        res.status(201).send(departObj);
    } 
    catch(e){
        res.status(404).send(e);
    }    
});

module.exports = router;
