<<<<<<< HEAD
const model = require('./model')

function addCarrera( objeto ) {
    const carrera = new model( objeto )
    carrera.save()
}

async function getCarreras( filtroCarrera ) {
    let filtro = {}
    if (filtroCarrera != null) {
        filtro = { nombre : filtroCarrera }
    }
    const carreraList = await model.find( filtro )
    return carreraList
}

async function updateCarrera( idCarrera, objeto ) {
    const foundCarrera = await model.findOne({ _id: idCarrera })

=======
// const db = require ('mongoose') 
const model = require('./model')

// const list = []

function addCarrera(objeto){
    const carrera = new model (objeto)
    carrera.save()
    // list.push(objeto)
}
async function getCarreras(filtroCarrera){
    let filtro ={}
     if (filtroCarrera != null){
        filtro = {abreviatura : filtroCarrera}
     }
    const carreraList = await model.find(filtro)
    return carreraList
}
async function updateCarrera(idCarrera, objeto){
    const foundCarrera = await model.findOne({_id: idCarrera })
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
    foundCarrera.nombre = objeto.nombre
    foundCarrera.abreviatura = objeto.abreviatura
    foundCarrera.descripcion = objeto.descripcion

    const result = await foundCarrera.save()
    return result
}

<<<<<<< HEAD
function deleteCarrera(idCarrera) {
    return model.deleteOne({ _id: idCarrera })
}

module.exports = {
=======
function deleteCarrera(idCarrera){
    return model.deleteOne ({ _id: idCarrera})
}


module.exports = {// exponer la lsta
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
    add: addCarrera,
    get: getCarreras,
    update: updateCarrera,
    delete: deleteCarrera,
}