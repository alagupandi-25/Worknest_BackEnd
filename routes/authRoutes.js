"use strict";

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const userController = require('../controllers/userController');

const expiresIn = '12h';
const expiresInMs = 12 * 60 * 60 * 1000;

router.post("/create" , async (req,res) => {
    try{
        const userObj = await userController.createUser(req.body);
        res.status(201).send(userObj);
    }
    catch(e){
        res.status(400).json({
            message : e.message
        });
    }
});

router.post("/", async(req , res) => {
    try{
        const {email,password} = req.body;
       
        const userObj = await userController.getUser({email});

        if (!userObj || !(await userObj.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        } 

        const now = new Date();
        const expiresAt = new Date(now.getTime() + expiresInMs);   

        const token = jwt.sign(
            { id: userObj._id, userEmail : userObj.email , role: userObj.role  }, 
            process.env.SECRET_KEY, 
            { expiresIn: expiresIn }
        );

        res.status(200).json(
            {   
                message : "Login successful",
                token : token ,
                expiresAt: expiresAt.toISOString(),
                user : {
                    firstName : userObj.firstName,
                    lastName : userObj.lastName,
                    email : userObj.email,
                    role : userObj.role,
                }
            }
        );
    }
    catch(e){
        res.status(400).json({
            message : e.message
        });
    }
});


module.exports = router;