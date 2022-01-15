const express = require('express')
const cors = require('cors');
// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectId;
const SSLCommerzPayment = require('sslcommerz')
require('dotenv').config()
const { v4: uuidv4 } = require('uuid');

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 7000;


app.get('/', (req, res) => {
    res.send(`connected 2`)
})
app.listen(port, () => {
    console.log(`connected`)
})