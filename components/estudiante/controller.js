const storage = require('./storage')

<<<<<<< HEAD
function addEstudiante(cedula, nombre, apellido) {
    return new Promise((resolve, reject) => {
        let estudiante = {
=======

function addEstudiante ( cedula, nombre, apellido){
    return new Promise((resolve, reject) => {
        let estudiante ={
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
        }
<<<<<<< HEAD
        storage.add( estudiante )
        resolve( estudiante )
    })
}

function getEstudiantes( filtroEstudiante ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroEstudiante ) )
    } )
}

function updateEstudiante(idEstudiante, cedula, nombre, apellido) {
    return new Promise( async (resolve, reject) => {
        let estudiante = {
=======
        storage.add(estudiante)
        resolve(estudiante)
    })
}

function getEstudiante (filtroEstudiante){
    return new Promise((resolve, reject) => {// asincronismo con funcion flecha
        resolve(storage.get(filtroEstudiante))
    }) 
}

function updateEstudiante (idEstudiante, cedula, nombre, apellido){
    return new Promise (async(resolve, reject) =>{
        let estudiante={
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
        }
<<<<<<< HEAD
        const result = await storage.update(idEstudiante, estudiante)
        resolve( result )
    })
}

function deleteEstudiante(idEstudiante) {
    return new Promise((resolve, reject) => {
        storage.delete( idEstudiante )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addEstudiante,
    getEstudiantes,
    updateEstudiante,
    deleteEstudiante,
}
=======
        const result = await storage.update (idEstudiante, estudiante)
        resolve(result)
    })
}
function deleteEstudiante (idEstudiante){
    return new Promise ((resolve, reject) =>{
        storage.delete (idEstudiante)
            .then (()=> {resolve()})
            .catch((error) => { reject( error ) })  
    })
}

module.exports ={
    getEstudiante,
    addEstudiante,
    updateEstudiante,
    deleteEstudiante,
}
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
