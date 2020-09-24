var nombreApellido = 'Jose Valverde'
var edad = 37


// funcion tipo declarativa
function imprimirEdad (nombreApellido, edad){
    console.log(`${nombreApellido} tiene la edad de ${edad}.`)

}
// funcion tipo flecha
var imprimirEdad2 = (nombre, edad)=> {
    console.log(`${nombre} tiene la edad de ${edad}.`)
}

// // funcion Expresiva
// var imprimirEdad3 = funcion (nombre, edad){
//     // console.console.log(`${nombre} tiene la edad de ${edad}.`);
//     console.log(`${nombre} tiene la edad de ${edad}.`)
// }
imprimirEdad (nombreApellido,edad)
imprimirEdad ('Sakura Valverde', 14)

imprimirEdad2 (nombre,edad)
imprimirEdad2 ('Sakura Valverde', 14)

imprimirEdad3 (nombre,edad)
imprimirEdad3 ('Sakura Valverde', 14)


