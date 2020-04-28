const express = require('express')
const routes = express.Router()


routes.get('/post',async(req,res)=>{
	res.render('index')	
})


module.exports = routes;