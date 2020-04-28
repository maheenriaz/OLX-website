const jwt=require('jsonwebtoken')

const Profile= require('../model/user')

const auth=async(req,res,next)=>{
	try{
			const token = req.header('Authorization').replace('Bearer ', '')
			console.log(token);
			const decoded_token =jwt.verify(token,'thisIsMySecretKey')
			console.log("decode",decoded_token);
			const profile= await Profile.findOne({_id: decoded_token._id, 'tokens.token':token})
			
			if(!profile){
				throw new Error()
			}
			req.token =token
			console.log("hi req.tok",req.token);
		    req.profile=profile
		    console.log("hi profile",req.profile);
			next()
	}
	catch(e){
		res.status(401).send(e)
	}
}

module.exports=auth