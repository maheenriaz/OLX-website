const express = require('express')
const routes = express.Router()
const VehiclesSchema = require('../../model/vehicles')
console.log(VehiclesSchema);
var bodyParser = require('body-parser')

console.log(bodyParser);
// parse routeslication/json
routes.use(bodyParser.json())

// parse application/x-www-form-urlencoded
routes.use(bodyParser.urlencoded({ extended: false }))

const multer=require('multer')
const path= require('path')

const a=routes.use(express.static(__dirname + "../../../public/uploads"))
console.log(a);


const Storage = multer.diskStorage({
	destination: "../public/uploads/",
	filename: (req,file,cb)=>{
		cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
	}
});

 var upload = multer({storage:Storage}).single('blog');
 


routes.get('/attributes/rikshaw',(req,res)=>{
	res.render('rikshaw')
})

routes.post('/attributes/rikshaw',upload,async(req,res,next)=>{
	const rikshawData = await new VehiclesSchema({
			title: req.body.title,
			cars: req.body.condition,
			description: req.body.description,
		    price:req.body.price,
		    image:req.file.filename,
		    name:req.body.name
	})	
	
	console.log(rikshawData);
	rikshawData.save(function(err) {
      if (err) throw err;
      res.render('rikshaw')
      console.log('product created!');
    });
 
	
})
module.exports = routes;