'use strict';

const Department = require('../models/Department');

const getDepartment = async function (field) {
    return Department.findOne(field);
}

const createDepartment = async function (departContent) {
    const obj = await new Department(departContent);
    obj.head = null;
    await obj.validate();
    await obj.save();
    return obj;
}

module.exports = {
    createDepartment,
    getDepartment,
}