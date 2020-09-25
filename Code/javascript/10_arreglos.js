var objeto1 ={
    nombre:'Pepito',
    apellido:'Piguave',
    altuta:180,
    cantidadLibros: 20
}
var objeto1 ={
    nombre:'Pepito',
    apellido:'Piguave',
    altuta:170,
    cantidadLibros: 20
}
var objeto2 ={
    nombre:'Pedro',
    apellido:'Montalvo',
    altuta:120,
    cantidadLibros: 200
}
var objeto3 ={
    nombre:'Veronica',
    apellido:'Valvered',
    altuta:100,
    cantidadLibros: 10
}
var objeto4 ={
    nombre:'Meridia',
    apellido:'Montalval',
    altuta:180,
    cantidadLibros: 27
}
var objeto5 ={
    nombre:'Marco',
    apellido:'Riofrio',
    altuta:170,
    cantidadLibros: 20
}
var personas = [objeto1, objeto2, objeto3, objeto4, objeto5]
for (persona of persona){
    //una forma de recorrer
    console.log(`${persona.nombre} ${persona.apellido}`)
    //otra forma de recorer un arreglo de objetos
    for(var i=0; i<persona.length; i++){
        console.log(`${persona[i].nombre} ${persona[i].apellido}`)
    }
}
var personasAltas = persona.filter(esAlta)
// uso de funcion map con arreglos
const pasarAlturaMetros = (objeto) => {
    objeto.altuta = objeto.altuta / 100 //para reasignar el valor a altura
    return objeto
}
// para q la variable personas no se modifique
var otrasPresonas =[]
for (persona of personas){
    otrasPresonas.push (personas) // para llebnar un arreglo se hace 'push'
}

var personasMetros = personas.map (pasarAlturaMetros) 
console.log (personasMetros)

// otra forma puede ser, (funcion expresiva)
var personasCentimetros = personas.map ( function (objeto){ // la funcion map ´permite modificar un valor de un objeto
objeto.altuta = objeto.altuta * 100
return objeto
})
console.log (personasCentimetros)

// uso de la funcion 'reduce' en arreglo, saca un resumen de un aspecto de ese arreglo

const contabilizarLibros = (acum, {cantidadLibros}) => acum + cantidadLibros // va por cada objeto y agarra solo cantidad libros, luego va al siguiente y el acumulado va aumentando (recorre cada objeto , por una variabel  y acumula en la variable)
var totalLibros =personas.reduce (contabilizarLibros, 0) // el '0 es desde donde inicia el conteo
console.log(` La cantidad de libros es ${totalLibros} `)