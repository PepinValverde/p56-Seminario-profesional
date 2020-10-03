<<<<<<< HEAD
const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://ups:ups2020@cluster0.pjyad.gcp.mongodb.net/utups?retryWrites=true&w=majority',
    port: process.env.PORT || 5000,
=======
const config ={
    dbUrl: process.env.DB_URL || 'mongodb+srv://ups:ups2020@cluster0.nwiwp.gcp.mongodb.net/utups?retryWrites=true&w=majority',
    port : process.env.PORT || 5000,
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files',
}
<<<<<<< HEAD

module.exports = config
=======
module.exports=config
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
