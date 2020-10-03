<<<<<<< HEAD
const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', function(req, res) {
    const filtroDocente = req.query.docente || null
    controller.getDocentes( filtroDocente )
        .then((data) => {
            response.success( req, res, data, 200 )
        })
        .catch((error) => {
            response.error( req, res, error, 500 )
        })
})

router.post('/', function(req, res) {
    controller.addDocente( req.body.nombre, req.body.apellido, req.body.correoElectronico )
=======
const express = require ('express')
const response = require ('../../network/response')
const controller = require ('./controller')

const router = express.Router()

router.get('/', function (req, res){
    const filtroDocente = req.query.docente || null
    controller.getDocente (filtroDocente)
        .then ((data) => { // esta linea va xq es heredada
            response.success(req, res, data, 200)
        })
        .catch((error)=>{
            response.error(req, res, error, 500)
        })
}) 
router.post('/', function(req, res) {
    controller.addDocente( req.body.nombre, req.body.apellido, req.body.correo_electronico )
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
        .then((data) => {
            response.success( req, res, data, 201 )        
        })
        .catch((error) => {
            response.error( req, res, error, 500 )        
        })
})

<<<<<<< HEAD
router.patch('/', function(req, res) {
    controller.updateDocente( req.body.id_docente, req.body.nombre, req.body.apellido, req.body.correoElectronico )
        .then((data) => {
            response.success( req, res, data, 201 )        
        })
        .catch((error) => {
            response.error( req, res, error, 500 )        
        })
})

router.delete('/', function(req, res) {
    controller.deleteDocente( req.body.id_docente )
        .then((data) => {
            response.success( req, res, data, 201 )        
        })
        .catch((error) => {
            response.error( req, res, error, 500 )        
        })
})


=======
router.patch('/', function(req, res){
    controller.updateDocente (req.body.id_docente, req.body.nombre, req.body.apellido, req.body.correo_electronico)
        .then((data) =>{
            response.success(req, res, data, 201)
        })
        .catch ((error) =>{
            response.error(req, res, error, 500)
        })
})

router.delete('/', function(req, res){
    controller.deleteDocente (req.body.id_docente)
    .then((data) =>{response.success(req, res, data, 201) })
    .catch ((error) =>{response.error(req, res, error, 500)})  
})

>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
module.exports = router