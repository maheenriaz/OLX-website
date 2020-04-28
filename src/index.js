const express = require('express')
 require('./db/mongoose')
const app = express()
app.use(express.json())
var cors = require('cors')
const hbs = require('hbs')
const path = require('path')
app.use(cors())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const middleware= require('./middlewares/auth')
// import dependencies

// Import schema
 const  Accessories = require('./model/addpost')
 //console.log(Accessories);
 const  VehicleSchema = require('./model/vehicles')
  const  userSchema = require('./model/user')

 // import routes
const AddPostRoute = require('./route/addpost-route')
const TabletAttribute = require('./route/attributes/tablets')
const AccessoriesAttribute = require('./route/attributes/Accessories')
const carsAttribute = require('./route/attributes/cars')
const busAttribute = require('./route/attributes/bus')
const rikshawAttribute = require('./route/attributes/rikshaw')
const loginAttribute = require('./route/attributes/login')
const userProfileAttributes = require('./route/attributes/userprofile')

app.use(express.static(path.join(__dirname, '../public/')));


app.use(AddPostRoute)
app.use(TabletAttribute)
app.use(AccessoriesAttribute)
app.use(carsAttribute)
app.use(busAttribute)
app.use(rikshawAttribute)
app.use(loginAttribute)
app.use(userProfileAttributes)

app.use(middleware)

app.set('view engine','hbs');



const viewFolder = path.join(__dirname,'../template/views/')
app.set('views',viewFolder);

const port = process.env.PORT || 3000


app.listen(port,()=>{console.log(`running ${port}`)})