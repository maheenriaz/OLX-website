const express = require('express')
const routes = express.Router()
const Profiles = require('../../model/addpost')
const Vehicles = require('../../model/vehicles')
const User = require('../../model/user')
const bcrypt=require('bcryptjs')  //npm install bcrypt
const jwt = require('jsonwebtoken')  //npm install jsonwebtoken
var bodyParser = require('body-parser')
const multer=require('multer')
const path= require('path')
// parse routeslication/json
routes.use(bodyParser.json())
// parse application/x-www-form-urlencoded
routes.use(bodyParser.urlencoded({ extended: false }))
var cors = require('cors')
routes.use(cors())


process.env.SECRET_KEY = 'secret'

//routes.use(express.static(__dirname +"../../.././public/userpic/"))

const Storage = multer.diskStorage({
  destination: "../public/userpic/",
  filename: (req,file,cb)=>{
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
  }
});

 var upload1 = multer({storage:Storage}).single('file');
 

routes.get('/register',(req,res)=>{
	res.render('register')
})

routes.post('/register',upload1,async(req,res)=>{
	 const today = new Date()
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    cnic: req.body.cnic,
    image:req.file.filename,
    created: today
  }
  console.log(userData);

 User.findOne({
      email: req.body.email   // user k input waly email ko db me find krrhy
  })

 //TODO bcrypt			// agr db me email milgya user ka to uska password hash krrhy
    .then((user )=> { 
    console.log(user); 
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash   	//user ka pass hash krrhy
          User.create(userData) 	//create fun database me save krrha hy
            .then(user => {
             //   console.log(user);
              res.json({ status: user.email + 'Registered!' })
            })

            .catch(err => {    
              res.send('error: ' + err)
            })
        })
      } 
      else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})







routes.get('/login',(req,res)=>{
	res.render('login')
})

routes.post('/login',async (req,res)=>{

  User.findOne({
      email: req.body.email
  }) 
    .then((user )=> {
       //console.log(user);
      if (user) {
        console.log("hello");
        console.log("yaa",bcrypt.compareSync(req.body.password, user.password))
        
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign({_id:user._id.toString()}, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          //console.log(token);
          const { _id,name,email,mobile,cnic,image} = user;
          const toSend = {
            _id,name,email,mobile,cnic,token,image
          }
          console.log(toSend);
         //  res.render('ads', {user: toSend});
        res.send(toSend)
          //res.sendFile('ads',{toSend})
        }
        else{
          res.status(400).json({ error: 'Password Incorrect' })
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})





routes.get('/ads',async(req,res)=>{
	res.render('ads')
})
routes.get('/',async(req,res)=>{
	try{
// const id = req.profile._id;
// console.log(id);
	
		const profile = await Profiles.find((err,doc)=>{
						if(!err)
						{
							//console.log(doc);

							return {doc} 
						}
						else{
							console.log("error");
						}

					})
		//console.log(profile);
		
		const vehicles = await	Vehicles.find((err1,doc1)=>{
						if(!err1)
						{
							
							return doc1
						}
						else{
							console.log("error");
						}

					})

		
			res.send({profile,vehicles})
		
}

catch{
	console.log("error in catch");
	res.status(404).send()
}
});

routes.get('/userprofile',(req,res)=>{
  res.render('userprofile')
})


routes.put('/userprofile',(req,res)=>{
  //console.log(req.body);
    const id=req.body.uid;
    console.log(id);
    console.log(req.body.phone);
   if(id != undefined )
   {
       User.findByIdAndUpdate({_id: id},{
         name: req.body.name,
         email:req.body.email,
         mobile:req.body.phone,
       },function(error,result){
         if(error){
           return res.json({message:"not update"})
         }
         else{
           return res.json({success:result})
         }
       })
   }
   else{
     return res.json({message:"error"})
   }
})




















module.exports = routes;