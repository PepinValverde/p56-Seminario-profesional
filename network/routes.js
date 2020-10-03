const express = require('express')
const carrera = require('../components/carrera/network')
const docente = require('../components/docente/network')
const estudiante = require('../components/estudiante/network')
<<<<<<< HEAD
const titulacion = require('../components/titulacion/network')

const routes = function(server) {
    server.use('/carrera', carrera)
    server.use('/docente', docente)
    server.use('/estudiante', estudiante)
    server.use('/titulacion', titulacion)
}

=======
// const titulacion = require('../components/titulacion/network')

const routes = function (server){
    server.use('/carrera', carrera)
    server.use('/docente', docente)
    server.use('/estudiante', estudiante)
    // server.use('/titulacion', titulacion)
}
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
module.exports = routes