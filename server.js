const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const dbConnection = require('./config/db');
const User = require('./models/User')

const authRoute = require('./routes/authRoutes');

app.use(cors());
app.use(bodyParser.json());

dbConnection();

app.use("/user",authRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});