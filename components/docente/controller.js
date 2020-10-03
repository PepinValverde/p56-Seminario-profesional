<<<<<<< HEAD
const storage = require('./storage')

function addDocente(nombre, apellido, correo_electronico) {
    return new Promise((resolve, reject) => {
        let docente = {
=======
const storege  = require ('./storage')

function addDocente ( nombre, apellido, correo_electronico){
    return new Promise((resolve, reject) => {
        let docente ={
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
        }
<<<<<<< HEAD
        storage.add( docente )
        resolve( docente )
    })
}

function getDocentes( filtroDocente ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroDocente ) )
    } )
}

function updateDocente(idDocente, nombre, apellido, correo_electronico) {
    return new Promise( async (resolve, reject) => {
        let docente = {
=======
        storege.add(docente)
        resolve(docente)
    })
}

function getDocente( filtroDocente ) {
    return new Promise((resolve, reject) => {
        resolve(storege.get(filtroDocente))
    }) 
}

function updateDocente ( idDocente, nombre, apellido, correo_electronico){
    return new Promise (async(resolve, reject) =>{
        let docente={
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
        }
<<<<<<< HEAD
        const result = await storage.update(idDocente, docente)
        resolve( result )
    })
}

function deleteDocente(idDocente) {
    return new Promise((resolve, reject) => {
        storage.delete( idDocente )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addDocente,
    getDocentes,
    updateDocente,
    deleteDocente,
}
=======
        const result = await storage.update (idDocente, docente)
        resolve(result)
    })
}
function deleteDocente (idDocente){
    return new Promise ((resolve, reject) =>{
        storage.delete (idDocente)
            .then (()=> {resolve()})
            .catch((error) => { reject( error ) })   
    })
}

module.exports ={
    getDocente,
    addDocente,
    updateDocente,
    deleteDocente,
}
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
