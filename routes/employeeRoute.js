"use strict";

const express = require('express');
const router = express.Router();

const empController = require('../controllers/employeeController');
const departController = require('../controllers/departmentController');
const userController = require('../controllers/userController');
const Employee = require('../models/Employee');

router.post('/', async(req , res) => {
    try{
        const content = req.body;
        
        const departObj = await departController.getDepartment({name : content.department});
        if(!departObj){
            return res.status(404).json({ message: 'Department with given name not found.' });
        }

        const userObj = await userController.getUser({email : content.user});
        if(!userObj){
            return res.status(404).json({ message: 'User with given email not found.' });
        }

        content.user = userObj._id;
        content.department = departObj._id;

        const empObj = await empController.createEmployee(content);
        
        return res.status(201).send(empObj);
    }
    catch(e){
        return res.status(500).send({message : e.message});
    }
    
});

module.exports = router;