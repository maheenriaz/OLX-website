const express = require('express')
const routes = express.Router()
const Accessories = require('../../model/addpost')
const userSchema = require('../../model/user')
//console.log(Accessories);
const multer=require('multer')
const path= require('path')
var bodyParser = require('body-parser');
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));


const Storage = multer.diskStorage({
	destination: "../public/uploads/",
	filename: (req,file,cb)=>{
		cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
	}
});

 var upload = multer({storage:Storage}).single('file');
 
routes.get('/attributes/accessories',async(req,res)=>{
	res.render('Accessories')	
})


routes.post('/attributes/accessories',upload,async(req,res,next)=>{
		
	const aData =  new Accessories({
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
		    category:req.body.catAccessories,
		    image:req.file.filename,
		    name:req.body.name,
		    number:req.body.number
		    
	})	

		
	console.log(aData);
	
	aData.save(function(err) {
      if (err) throw err;
      res.render('Accessories')
      console.log('product created!');
    });
	
		
	
})


module.exports = routes;