const mongoose = require('mongoose')
const validator = require('validator')


const profileSchema = new mongoose.Schema(
	{
			name:{
				type: String
			},
			email:{
				type: String,
				lowercase:true,
				validate(value)
				{
					if (!validator.isEmail(value)) 
						{ throw new Error("email wrong")}
				}
			},
			password:{
				type:String,
				required: true,
				minLength:7,
				trim : true,
			},
			mobile:{
				type:Number
			},
			cnic:{
				type:String
			},
			image:String,

			tokens:[{
				token:{
					type:String,
					required:true
				}
			}]

		}
	)



const Profile = mongoose.model('Profiles',profileSchema)

module.exports= Profile;