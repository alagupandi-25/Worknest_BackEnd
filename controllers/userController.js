const User = require('../models/User');

const createUser = async function(userContent){
    const userObj = new User(userContent);
    await userObj.validate();
    await userObj.save();
    return User;
};

module.exports = {
    createUser
}