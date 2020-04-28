const mongoose = require('mongoose')

// const profileSchema = new mongoose.Schema(
// 	{
// 			type:{
// 					type:String,
// 				},
// 				title:{
// 					type:String,
// 				},
// 				description:{
// 					type:String,
// 				},
// 				price:{
// 					type:Number,
// 				}	
// })

const mobileSchema = new mongoose.Schema(
	{
			category: {type:String},
			title: String,
			description: String,
			price: Number,
			image:String,
			name: String,
			number: Number
						
})
 //const TabletSchema = mongoose.model('Profiles',profileSchema)
const Mobile = mongoose.model('accessories',mobileSchema)

module.exports= Mobile
