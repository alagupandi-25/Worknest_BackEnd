"use strict";

const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Original name is required"],
        trim : true,
    }, 
    FileName : {
        type : String,
        required : [true , "File name is required"],
        trim : true
    },
    size : {
        type : Number,
        default : 0,
    }, 
    fileType : {
        type : String,
        required : [true , "File type is required"],
    }, 
    bucket : {
        type : String,
        required : [true , "Bucket field is required"],
    }},
    {
        timestamps : true
    }
);

module.exports = FileSchema;