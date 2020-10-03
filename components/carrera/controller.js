<<<<<<< HEAD
const storage = require('./storage')

function addCarrera(nombre, abreviatura, descripcion) {
    return new Promise((resolve, reject) => {
        let carrera = {
=======
const storege  = require ('./storage')

function addCarrera ( nombre, abreviatura, descripcion){
    return new Promise((resolve, reject) => {
        let carrera ={
            // id_carrera: id_carrera,

>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
            nombre: nombre,
            abreviatura: abreviatura,
            descripcion: descripcion,
        }
<<<<<<< HEAD
        storage.add( carrera )
        resolve( carrera )
    })
}

function getCarreras( filtroCarrera ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroCarrera ) )
    } )
}

function updateCarrera(idCarrera, nombre, abreviatura, descripcion) {
    return new Promise( async (resolve, reject) => {
        let carrera = {
=======
        storege.add(carrera)
        resolve(carrera)
    })
}

function getCarreras (filtroCarrera){
    return new Promise((resolve, reject) => {// asincronismo con funcion flecha
        resolve(storege.get(filtroCarrera))
    }) 
}

function updateCarrera (idCarrera, nombre, abreviatura, descripcion){
    return new Promise (async(resolve, reject) =>{
        let carrera={
            // idCarrera
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
            nombre: nombre,
            abreviatura: abreviatura,
            descripcion: descripcion,
        }
<<<<<<< HEAD
        const result = await storage.update(idCarrera, carrera)
        resolve( result )
    })
}

function deleteCarrera(idCarrera) {
    return new Promise((resolve, reject) => {
        storage.delete( idCarrera )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addCarrera,
    getCarreras,
    updateCarrera,
    deleteCarrera,
}
=======
        const result = await storege.update (idCarrera, carrera)
        resolve(result)
    })
}
function deleteCarrera (idCarrera){
    return new Promise ((resolve, reject) =>{
        storage.delete (idCarrera)
            .then (()=> {resolve(nombre)})
            .cath (()=> {reject()})   
    })
}

module.exports ={
    getCarreras,
    addCarrera,
    updateCarrera,
    deleteCarrera,
}
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
