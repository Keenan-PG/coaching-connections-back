/*
    IMPORTS AND VARS
*/

const PORT = 4000;

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser');


/*
    CONTENT
*/

// mongodb
mongoose.connect('mongodb://127.0.0.1:27017/ccx', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// loading cors and bodyparser
app.use(cors());
app.use(bodyParser.json());

// listening for server
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

// run: nodemon server
// https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-2/?source=post_page---------------------------