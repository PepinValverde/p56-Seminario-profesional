const express = require ('express')
const response = require ('../../network/response')
// const controller = require ('./controller')
const router = express.Router()

router.get('/', function(req, res){
    response.success(req, res, 'Lista de docentes de la UPS', 200)

}) 
router.post('/', function(req, res){ 
    if (req.query.error == 'ok'){
        response.error(req, res, 'Pilas no se ingreso docente, error de Ingreso', 500)
    }else {
        response.success(req, res, 'Ingreso Docente Listo "Papelito" ', 201)
    }
    
})

module.exports = router