"use strict";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8080;

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const dbConnection = require('./config/db');
const User = require('./models/User')

const authRoute = require('./routes/authRoutes');
const deparRoute = require('./routes/departmentRoute');
const empRoute = require('./routes/employeeRoute');

const authMiddleware = require('./middlewares/authMiddleware');

dbConnection();

app.use("/user",authRoute);
app.use("/employee",empRoute);
app.use('/department',deparRoute);

app.get('/', authMiddleware.authenticateToken, authMiddleware.authorizeRoles("Employee") ,(req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

