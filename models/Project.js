"use strict";

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Project name is required"],
        trim : true,
    },
    description : {
        type : String,
        trim : true,
    }, 
    client : {
        type : String,
        required : [true, "Client details is required"],
    },
    startData : {
        type : Date, 
    } , 
    ducData : {
        type : Date,
    },
    tasks : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Task',
        }
    ],
    teamLeader : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Employee',
        }
    ],
    members : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Employee',
        }
    ],
    status : {
        type : String,
        enum : ['planned','active','on-hold','completed','cancelled'],
        default : 'planned',
    },
    notes : {
        type: String,
        trim : true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    budget: {
        type: String,
        trim : true,
    }},
    {
        timestamps : true,
    }
);