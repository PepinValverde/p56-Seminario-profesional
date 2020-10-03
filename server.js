<<<<<<< HEAD
// este es del INg. Pizarro

const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const config = require('./config')
const db = require('./db')
const router = require('./network/routes')

db( config.dbUrl )

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) )
router( app )

app.use( config.publicRoute, express.static('public') )

app.listen( config.port )
console.log( `La aplicación está escuchando en ${config.host}:${config.port}${config.publicRoute}` )
=======
const express = require ('express') 
const bodyParser = require('body-Parser') 
const response = require('./network/response')

const config = require('./config')
const db  = require ('./db')
const router = require('./network/routes') 

db (config.dbUrl)

var app = express()
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({extended:false}))
router (app)

app.use(config.publicRoute, express.static('public')) 

app.listen (config.port) 
console.log(`La app se esta escuchando..ando en  ${config.host}:${config.port}: ${config.publicRoute}`) 
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
