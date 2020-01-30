const express = require('express')
const bodyParser = require('body-parser')
//const db = require('./models')
const postRoutes = require('./app/api/post')
const authorRoutes = require('./app/api/author')
const mongoose = require('mongoose')
const app = express()

const db = {
  Author: require("./models/mongoModel/author"),
  Post: require("./models/mongoModel/post"),
}


// Set up mongoose connection
let DATABASE_URL = 'mongodb://127.0.0.1:27017/node_tdd';
let mongoDB = process.env.MONGODB_URI || DATABASE_URL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let dbConnect = mongoose.connection;
dbConnect.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('app/public'))

app.get('/', async (req, res) => {
  res.status(200).send('Hello World!')
})


postRoutes(app, db)
authorRoutes(app, db)
module.exports = app
