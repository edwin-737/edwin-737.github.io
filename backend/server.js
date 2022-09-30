const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
var options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: 'Users'
};
mongoose.connect(uri, options);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection initialized successfully");
})
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});