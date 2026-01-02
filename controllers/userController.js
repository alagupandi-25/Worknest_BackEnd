"use strict";

const User = require('../models/User');

const createUser = async (userContent) => {
    const userObj = new User(userContent);
    await userObj.validate();
    await userObj.save();
    return userObj;
};

const getUser = (field) => {
    return User.findOne(field);
}

module.exports = {
    createUser,
    getUser
}