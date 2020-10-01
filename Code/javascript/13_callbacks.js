// asincronismo, controlar el tiempo de la ejecucion de una funcion
funcion hola (nombre, fn_cb){ // se envia una funcion como parametro de la funcion
    setTimeout (function(){
        console.log (`hola soy ${nombre}.`)
        fn_cb()
    },3000)  
}


console.log (`Inicio conteo 0`)
setTimeout (function(){
    console.log (`hola word`)
},3000)
console.log (`finalizo conteo`)