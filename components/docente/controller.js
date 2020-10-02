const storage = require('./storage')
const storege  = require ('./storage')

function addDocente ( nombre, apellido, correo_electronico){
    return new Promise((resolve, reject) => {
        let docente ={
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
        }
        storege.add(docente)
        resolve(docente)
    })
}

function getDocente (filtroDocente){
    return new Promise((resolve, reject) => {
        resolve(storege.get({filtroDocente}))
    }) 
}

function updateDocente ( nombre, apellido, correo_electronico){
    return new Promise (async(resolve, reject) =>{
        let carrera={
            nombre: nombre,
            apellido: apellido,
            correo_electronico: correo_electronico,
        }
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
