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
router.post('/', function(req, res){ 
    if (req.query.error == 'ok'){
        response.error(req, res, 'Pilas no se ingreso docente, error de Ingreso', 500)
    }else {
        response.success(req, res, 'Ingreso Docente Listo "Papelito" ', 201)
    }
    
})

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

module.exports = router