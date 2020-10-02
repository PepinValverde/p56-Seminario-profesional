exports.success = function (req,res, message, status){ // estado de respuesta correcta
    res.status(status).send({
        error:'',
        body: message
    })

}

exports.error= function(req, res, message, status){ // estado de respuesta incorecta
    console.error('[Error log] - ${message}')
    res.status(status).send({
        error:message, 
        body: ''
    })
}