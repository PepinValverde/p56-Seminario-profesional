const db = require('mongoose')

db.Promise = global.Promise

async function connect(uri) {
    await db.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'utups',
    })
        .then((data) => { console.log('[db] - Conectado Compadre.') })
        .catch((error) => {  console.error( '[error log] - ' + error ) })    
}

module.exports = connect