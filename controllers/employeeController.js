"use strict";

const Employee = require('../models/Employee');

const createEmployee = async(empContent) => {
    const empObj = new Employee(empContent);
    await empObj.validate();
    await empObj.save();
    return empObj;
}

const getEmployeesByEmpid = () => {
    
}

module.exports = {
    createEmployee,
}

