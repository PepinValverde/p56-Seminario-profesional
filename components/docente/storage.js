<<<<<<< HEAD
const model = require('./model')

function addDocente( objeto ) {
    const docente = new model( objeto )
    docente.save()
}

async function getDocentes( filtroDocente ) {
    let filtro = {}
    if (filtroDocente != null) {
        filtro = { nombre : filtroDocente }
    }
    const docenteList = await model.find( filtro )
    return docenteList
}

async function updateDocente( idDocente, objeto ) {
    const foundDocente = await model.findOne({ _id: idDocente })

=======

const model = require('./model')

function addDocente(objeto){
    const docente = new model (objeto)
    docente.save()
}
async function getDocente(filtroDocente){
    let filtro ={}
     if (filtroDocente != null){
        filtro = {nombre : filtroDocente}
     }
    const docenteList = await model.find(filtro)
    return docenteList
}
async function updateDocente(idDocente, objeto){
    const foundDocente = await model.findOne({ _id: idDocente })
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
    foundDocente.nombre = objeto.nombre
    foundDocente.apellido = objeto.apellido
    foundDocente.correo_electronico = objeto.correo_electronico

    const result = await foundDocente.save()
    return result
}

<<<<<<< HEAD
function deleteDocente(idDocente) {
    return model.deleteOne({ _id: idDocente })
=======
function deleteDocente(idDocente){
    return model.deleteOne ({ _id: idDocente})
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
}

module.exports = {
    add: addDocente,
<<<<<<< HEAD
    get: getDocentes,
=======
    get: getDocente,
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
    update: updateDocente,
    delete: deleteDocente,
}