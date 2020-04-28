const express = require('express')
const routes = express.Router()
const VehiclesSchema = require('../../model/vehicles')
console.log(VehiclesSchema);
var bodyParser = require('body-parser')

console.log(bodyParser);
// parse routeslication/json
routes.use(bodyParser.json())
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

 var upload = multer({storage:Storage}).single('blog1');
 

// parse application/x-www-form-urlencoded
routes.use(bodyParser.urlencoded({ extended: false }))



routes.get('/attributes/cars',(req,res)=>{
	res.render('cars')
})

routes.post('/attributes/cars',upload,async(req,res,next)=>{
	const carData = await new VehiclesSchema({
			title: req.body.title,
			cars: req.body.cars,
			description: req.body.description,
		    price:req.body.price,
		    fuel : req.body.fuel,
		    image: req.file.filename,
		    name:req.body.name
	})	
	
	console.log(carData);
	carData.save(function(err) {
      if (err) throw err;
      res.render('cars')
      console.log('product created!');
    });
 
	
})
module.exports = routes;