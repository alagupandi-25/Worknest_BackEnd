"use strict";

const Employee = require('../models/Employee');

const createEmployee = async function (empContent) {
    const empObj = new Employee(empContent);
    await empObj.validate();
    await empObj.save();
    return empObj;
}

module.exports = {
    createEmployee,
}

