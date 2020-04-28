const mongoose = require('mongoose')


const vehicleSchema = new mongoose.Schema(
	{
			
			title: String,
			cars: {type:String},
			description: String,
			price: Number,
			fuel: {type: String},
			image:String,
			name:String
						
})
 //const TabletSchema = mongoose.model('Profiles',profileSchema)
const Vehicles = mongoose.model('vehicles',vehicleSchema)

module.exports= Vehicles
