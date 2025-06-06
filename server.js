"use strict";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());

const dbConnection = require('./config/db');
const User = require('./models/User')

const authRoute = require('./routes/authRoutes');


dbConnection();

app.use("/user",authRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

