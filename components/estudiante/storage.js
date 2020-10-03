const model = require('./model')

<<<<<<< HEAD
function addEstudiante( objeto ) {
    const estudiante = new model( objeto )
    estudiante.save()
}

async function getEstudiantes( filtroEstudiante ) {
    let filtro = {}
    if (filtroEstudiante != null) {
        filtro = { cedula : filtroEstudiante }
    }
    const estudianteList = await model.find( filtro )
    return estudianteList
}

async function updateEstudiante( idEstudiante, objeto ) {
    const foundEstudiante = await model.findOne({ _id: idEstudiante })

=======

function addEstudiante(objeto){
    const estudiante = new model (objeto)
    estudiante.save()
}
async function getEstudiante(filtroEstudiante){
    let filtro ={}
     if (filtroEstudiante != null){
        filtro = {cedula : filtroEstudiante}
     }
    const estudianteList = await model.find(filtro)
    return estudianteList
}
async function updateEstudiante(idEstudiante, objeto){
    const foundEstudiante = await model.findOne({_id: idEstudiante })
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
    foundEstudiante.cedula = objeto.cedula
    foundEstudiante.nombre = objeto.nombre
    foundEstudiante.apellido = objeto.apellido

    const result = await foundEstudiante.save()
    return result
}

<<<<<<< HEAD
function deleteEstudiante(idEstudiante) {
    return model.deleteOne({ _id: idEstudiante })
}

module.exports = {
    add: addEstudiante,
    get: getEstudiantes,
=======
function deleteEstudiante( idEstudiante ){
    return model.deleteOne ({ _id: idEstudiante})
}


module.exports = {// exponer la lsta
    add: addEstudiante,
    get: getEstudiante,
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
    update: updateEstudiante,
    delete: deleteEstudiante,
}