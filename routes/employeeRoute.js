"use strict";

const express = require('express');
const router = express.Router();

const empController = require('../controllers/employeeController');
const departController = require('../controllers/departmentController');

router.post('/', async(req , res) => {
    const content = req.body;
    const departObj = departController.getDepartment({name : content.department});
    return departObj;
});

module.exports = router;