// Java Scrpt no es lenguaje orientado a Objetos
// en Js no se puede hacer herecia pero se puede emular de la siguiente forma
function heredaDe (prototipoHijo, prototipoPadre){ // se hace en una variale temporal de tipo funcion, asi se hereda de otra Clase
    var fn = function(){} // declara funcion vacia, a esto se llama sobreescritura
    fn.prototype = prototipoPadre.prototype  // aqui le doy los valores de Clase Padre
// aqui obtengo los atribitos y metodos de Padre
    prototipoHijo.prototype = new fn // // lo q se hace es instansiar en prototipoPadre
    prototipoHijo.prototype.constructor = prototipoHijo // se le pasan todos los valores de prototipoHIjpo pero en constructor
}

function  Persona (nombre, apellido, altuta){ // clase padre (constructor)
this.nombre = nombre
this.apellido = apellido
this.altuta = altuta
}
funcion Deportista (nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe (Deportista, persona)

Persona.prototype.saludar = function(){
    console.log (` Hola soy ${this.nombre} ${this.apellido} `)
}
Persona.prototype.saludar = function(){
    console.log (` Hola soy ${this.nombre} ${this.apellido}, y soy deportista `)
}