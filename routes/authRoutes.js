const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');



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

module.exports = router;