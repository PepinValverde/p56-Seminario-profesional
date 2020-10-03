<<<<<<< HEAD
exports.success = function(req, res, message, status) {
    res.status( status ).send( {
        error: '', 
        body: message 
    } )
}

exports.error = function(req, res, message, status) {
    console.error( `[Error log] - ${message}` )
    
    res.status( status ).send( {
        error: message, 
        body: '' 
    } )
=======
exports.success = function(req, res, message, status) { // estado de respuesta correcta
    res.status(status).send({
        error:'',
        body: message
    })

}

exports.error= function(req, res, message, status){ // estado de respuesta incorecta
    console.error(`[Error log] - ${message}`)
    res.status(status).send({
        error:message, 
        body: ''
    })
>>>>>>> 48fd0e579fc7b2a5a93f3c0343a11e5f1c615eb4
}