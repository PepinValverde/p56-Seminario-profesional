const model = require('./model')


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
    foundEstudiante.cedula = objeto.cedula
    foundEstudiante.nombre = objeto.nombre
    foundEstudiante.apellido = objeto.apellido

    const result = await foundEstudiante.save()
    return result
}

function deleteEstudiante( idEstudiante ){
    return model.deleteOne ({ _id: idEstudiante})
}


module.exports = {// exponer la lsta
    add: addEstudiante,
    get: getEstudiante,
    update: updateEstudiante,
    delete: deleteEstudiante,
}