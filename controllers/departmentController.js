'use strict';

const Department = require('../models/Department');

const getDepartment = async (field) => {
    return Department.findOne(field);
}

const getAllDepartment = () => {
    return Department.find();    
}

const createDepartment = async (departContent) => {
    const obj = new Department(departContent);
    obj.head = null;
    await obj.validate();
    await obj.save();
    return obj;
}

const updateDepartment = (id, updateData) => {
    return Department.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
}

const deleteDepartment = (id) => {
    return Department.findByIdAndDelete(id);
}

module.exports = {
    createDepartment,
    getDepartment,
    getAllDepartment,
    updateDepartment,
    deleteDepartment,
}
