"use strict";

const mongoose  = require("mongoose");
const FileSchema = require("./baseSchema/FileSchema");

const ProfileSchema = new mongoose.Schema({
    
});

ProfileSchema.add(FileSchema);

const Profile = mongoose.model("Profile",ProfileSchema);

module.exports = Profile;