'use strict';

const Department = require('../models/Department');

const getDepartment = async function (field) {
    return Department.findOne(field);
}

const getAllDepartment = async function () {
    return Department.find();    
}

const createDepartment = async function (departContent) {
    const obj = new Department(departContent);
    obj.head = null;
    await obj.validate();
    await obj.save();
    return obj;
}

const updateDepartment = async function (id, updateData) {
    return Department.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
}

const deleteDepartment = async function (id) {
    return Department.findByIdAndDelete(id);
}

module.exports = {
    createDepartment,
    getDepartment,
    getAllDepartment,
    updateDepartment,
    deleteDepartment,
}
