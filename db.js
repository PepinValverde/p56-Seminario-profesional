const db = require('mongoose')

db.Promise = global.Promise

async function connect(uri) {
    await db.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'utups',
    })
<<<<<<< HEAD
        .then((data) => { console.log('[db] - Conectada con éxito.') })
=======
        .then((data) => { console.log('[db] - Conectado Compadre.') })
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
        .catch((error) => {  console.error( '[error log] - ' + error ) })    
}

module.exports = connect