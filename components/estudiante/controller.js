const storage = require('./storage')


function addEstudiante ( cedula, nombre, apellido){
    return new Promise((resolve, reject) => {
        let estudiante ={
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
        }
        storage.add(estudiante)
        resolve(estudiante)
    })
}

function getEstudiante (filtroEstudiante){
    return new Promise((resolve, reject) => {// asincronismo con funcion flecha
        resolve(storage.get({filtroEstudiante}))
    }) 
}

function updateEstudiante (idEstudiante, cedula, nombre, apellido){
    return new Promise (async(resolve, reject) =>{
        let estudiante={
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
        }
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
