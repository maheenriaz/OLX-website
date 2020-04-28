const express = require('express')
const routes = express.Router()
const Profiles = require('../../model/addpost')
const Vehicles = require('../../model/vehicles')
const User = require('../../model/user')
const auth=require('../../middlewares/auth')
console.log('hell',auth);
const {MongoClient,ObjectId}=require('mongodb')

var bodyParser = require('body-parser')
// parse routeslication/json
routes.use(bodyParser.json())

// parse application/x-www-form-urlencoded
routes.use(bodyParser.urlencoded({ extended: false }))




module.exports = routes;
