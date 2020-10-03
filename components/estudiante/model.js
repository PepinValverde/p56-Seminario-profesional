<<<<<<< HEAD
const mongoose = require('mongoose')
=======
const mongoose = require ('mongoose')
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
const schema = mongoose.Schema

const mySchema = new schema({
    cedula: {
        type: String,
        required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },
<<<<<<< HEAD
})

const model = mongoose.model( 'Estudiante', mySchema )
module.exports = model
=======
    // correo_electronico: {
    //     type: String,
    //     required: true,
    // },
    // nivel: {
    //     type: int,
    //     required: true,
    // },
    
})

const model = mongoose.model('Estudiante', mySchema)
module.exports = model
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
