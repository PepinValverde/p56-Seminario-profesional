Var docente1 = {
    nombre: 'Guillermo',
    apellido:'Pizarro',
    afiliacion:'UPS',
    correo_electronico: 'gpizarro@ups.edu.ec'
}

car docente2 ={
    nombre: 'juan',
    apellido:'Andrade',
    afiliacion:'UPS',
    correo_electronico: 'jandrade@ups.edu.ec'
}

function imprimirNombremayuscula (objeto){
    var { nombre} = objeto // 
    console.log(`${nombre.toUpperCase()} ${objto.apellido}`)
}
function imprimirNombreMinuscula (objeto){
    console.log(`${objeto.nombre.toLowerCase()} ${objto.apellido}`)
}
funcion imprimirApellidoMayuscula (apellido){
    console.log(` ${apellido.toUpperCase()}.`)
}

imprimirNombremayuscula (docente1)
imprimirNombreMinuscula (docente2)
imprimirApellidoMayuscula (docente2)