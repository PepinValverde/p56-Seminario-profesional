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
    foundCarrera.nombre = objeto.nombre
    foundCarrera.abreviatura = objeto.abreviatura
    foundCarrera.descripcion = objeto.descripcion

    const result = await foundCarrera.save()
    return result
}

function deleteCarrera(idCarrera){
    return model.deleteOne ({ _id: idCarrera})
}


module.exports = {// exponer la lsta
    add: addCarrera,
    get: getCarreras,
    update: updateCarrera,
    delete: deleteCarrera,
}