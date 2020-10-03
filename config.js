const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://ups:ups2020@cluster0.nwiwp.gcp.mongodb.net/utups?retryWrites=true&w=majority',
    port: process.env.PORT || 5000,// mongodb+srv://ups:<password>@cluster0.nwiwp.gcp.mongodb.net/test
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/',
    filesRoute: process.env.FILES_ROUTE || 'files',
}                                   

module.exports = config