var docente1 = {
    nombre:'guillermo'
    apellido: 'pizarro'
}
var docente2 = {
    nombre:'Dario'
    apellido: 'Huilcapi'
// }asisgnaxion por paso de valor, se desvincula, dos objetos diferenet en memoroa, si comparo es falso
var otroDocente = {
    ... docente1
}

console.log(docente1 == docente2) // comparo entre docente 1 y docente 2, me da un arespuesta en Boolean (falso)
console.log(docente1 == otroDocente)

console.log(otroDocente.nombre)
// Esta asignacion es por referencia, se hace el cambio y se mantiene el mismo, tiene la misma direccion de memoria x eso si se hace un cambio es falso
docente3 = otroDocente
otroDocente.nombre = 'Luis'

// sale true xq tiene la misma direcciond e memoria
console.log(docentee == otroDocente )
console.log(docente1 == docente3)
console.log(docente1 == docente1) 
