"use strict";

const mongoose = require('mongoose');
const Project =  require("../models/Project");

const createProject = async (projectContent) => {
    const projectObj = new Project(projectContent);
    await projectObj.validate();
    await projectObj.save();
    return projectObj;
}

const getAllProject = () => {
    return Project.find();
}

const getProject = (field) => {
    return Project.findOne(field);
}

module.exports = {
    createProject,
    getAllProject,
    getProject,
}