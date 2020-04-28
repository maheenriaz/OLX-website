const express = require('express')
const routes = express.Router()
const TabletSchema = require('../../model/addpost')
var bodyParser = require('body-parser');

const multer=require('multer')
const path= require('path')
routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));


const Storage = multer.diskStorage({
	destination: "../public/uploads/",
	filename: (req,file,cb)=>{
		cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
	}
});

 var upload = multer({storage:Storage}).single('file');
 

routes.get('/attributes/tablet',(req,res)=>{
	res.render('tablet')
})

routes.post('/attributes/tablet',upload,async(req,res,next)=>{
	const tData = new TabletSchema({
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
		    category:req.body.catTablet,
		    image:req.file.filename,
		     name:req.body.name,
		     number:req.body.number
	})	
	
	console.log(tData);
	tData.save(function(err) {
      if (err) throw err;
      res.render('tablet')
      console.log('product created!');
    });

	
})
module.exports = routes;