"use strict";

const User = require('../models/User');

const createUser = async function(userContent){
    const userObj = new User(userContent);
    await userObj.validate();
    await userObj.save();
    return userObj;
};

const getUser = async function(field){
    return User.findOne({field});
}

module.exports = {
    createUser,
    getUser
}