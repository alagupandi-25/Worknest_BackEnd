"use strict";

const express = require('express');
const router = express.Router();

const departController = require('../controllers/departmentController');


router.post('/', async (req , res) => {
    try{
        const departObj = await departController.createDepartment(req.body);
        res.status(201).send(departObj);
    } 
    catch(e){
        res.status(400).send({ error: e.message });
    }    
});

router.get("/", async (req ,res) => {
   try{
        const departObjs = await departController.getAllDepartment();
        res.status(200).send(departObjs);
   }
   catch(e){
        res.status(404).send({ error: e.message });
   }
});

router.get("/:id", async (req, res) => {
    try {
        const departObj = await departController.getDepartment({ _id: req.params.id });
        if (!departObj) {
            return res.status(404).send({ error: "Department not found" });
        }
        res.status(200).send(departObj);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updatedDepart = await departController.updateDepartment(req.params.id, req.body);
        if (!updatedDepart) {
            return res.status(404).send({ error: "Department not found" });
        }
        res.status(200).send(updatedDepart);
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedDepart = await departController.deleteDepartment(req.params.id);
        if (!deletedDepart) {
            return res.status(404).send({ error: "Department not found" });
        }
        res.status(200).send({ message: "Department deleted successfully" });
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
});

module.exports = router;
