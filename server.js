const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');

const app = express();

//BOdyPArser middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongoDB
mongoose.connect(db)
    .then(() => console.log('connection successful!'))
    .catch(err => console.log(err));

//App routes
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('App listening on port' +port));