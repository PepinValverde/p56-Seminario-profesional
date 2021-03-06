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
