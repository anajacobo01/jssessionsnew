
// console.log("Hola Mundo");
// alert("Hola mundo desde el navegador");

// // // ES5 ecma Script 5
// // var nombre = 'Pedro';

// // // ES6
// // let nombre = 'Pedro';
// // const nombre = 'Pedro';

// // Datos primitivos 

// // String cadenas de caracteres
// 'hola mundo'
// // number  entero, decimales
// 9
// 9.08

// // boolean true or false 

// true 
// false
// //array

// //object 

// // function 

// // undefined 

// // null

// //typeof regresara el valor 


// // coercion 
// //explicita hace uso de metodos o funciones 
// let numero = 123;
// console.log(numero);
// let conversion = String(numero);
// console.log(conversion)
// console.log(numero)

// // implicita 

// let nuevoConversion = numero + '';
// console.log(nuevoConversion);

// Number ()
// Boolean ()

// // Operadores logicos y matematicos 
// // suma
// 3 + 3 // 6 

// // concatenacion 
// '12' + 12 // '1212'
// // resta 
// 4-6  / -2 

// // multiplicacion 

// 4*4 // 16

// // division 
// 4 / 2 
// // modulo 

// 5%3


// // incremento 
// 4++ // 4

// ++4 // 5


// a = 5
// b = 10
// c = 15

// primerEjercicio = (3 + b) * c / a * 2;
// console.log(primerEjercicio);

// segundoEjercicio = ((a + b * c) / 5) * 2;
// console.log(segundoEjercicio);

// tercerEjercicio = b / a + 2 * c;
// console.log(tercerEjercicio);

// cuartoEjercicio  = (a + b + c / c) * a;
// console.log(cuartoEjercicio);

// quintoEjercicio  = ((3 * a) / c) + a + b + c;
// console.log(quintoEjercicio);

// sextoEjercicio  = a - (b + c) * a / 1 ;
// console.log(sextoEjercicio);

// estructuras de control condicionales 
// permite operar mediante condiciones que arrojen valores booleanos
//if
// condiciones ==> expresiones 
// validar que la variable tiene un valor string 
// Operadores https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion



// const valor = 9;
// if (typeof valor === 'string' ){
//     console.log ('La variable cumple la condicion');
// }
// else if (typeof valor === 'number' ){
//     console.log ('la variable no cumple la 1 condicion porque o cumple');
// }
// else {
//     console.log('La variable no cumple ninguna condicion')
// }
// Ejercicio 1
// Determinar si una persona puede votar 
// 1. Que su edad sea mayor o igual de 18 
// 2. Si tiene 30, felicitarlo y decirle que puede votar 
// 3. Si tiene mas de 30, decirle que no puede votar 
// // 
// let edad = 31 ;

//     ? (edad > 18 && edad > 30) ? console.log('No puedes votar');
//     : edad === 30 ?  console.log('Felicidades puedes votar');
   



// Switch, estructura de control de casos 
// caso corresponde a una condicion else if 
// switch (typeof valor){
//     case 'string':
//         console.log('Tu variable tiene un valor string');
//         break 
//     case 'number':
//         console.log('Tu variable tiene un valor number');
//         break 
//     case 'boolean':
//         console.log('Tu variable tiene un valor boolean');
//         break 
//     default:
//         console.log('La variable no cumple ninguna condicion');
//         break;

// }
// Ejercicio 2 
// // Dado la siguiente lista 

// 1. Lunes 
// 2. Martes 
// 3. Miercoles 
// 4. Jueves 
// 5. Viernes 
// 6. Sabado 
// 7. Domingo 
// Mencionar el nombre del dia que es 

// const valor = 4 
// switch (valor){
//     case 1:
//         console.log('Hoy es Lunes');
//         break 
//     case 2:
//         console.log('Hoy es Martes');
//         break 
//     case 3:
//         console.log('Hoy es Miercoles');
//         break 
//     case 4:
//         console.log('Hoy es Jueves');
//             break 
//     case 5:
//         console.log('Hoy es Viernes');
//          break 
//     case 6:
//         console.log('Hoy es Sabado');
//         break 
//     case 7:
//         console.log('Hoy es Domingo');
//             break 
//     default:
//         console.log('Dia no dentro de la semana');
//         break;

// }

// ternario, es una forma abreviada de un if/else 

// if (condicion){} else {}
// condicion ? resultado si es verdadera : resultado si es falsa;
// const nombre = 'Juan';
// const profesion = 'Contador';
// //Ejemplo 1
// nombre==='Juan' ? 'Hola Juan como estas?' : 'Como te llamas';
// //Ejemplo 2 Anidado
// const resultado = nombre==='Juan' 
//     ? profession === 'Contador'
//         ? 'Me ayudas con mi declaracion'
//         :'No conoces algun contador?'
//     : 'Como te llamas';
// console.log('el ternario me entrego: ', resultado);

// // Ejemplo con if 

// const resultado 2= '';
// if (nombre === 'Juan'){
//     if(profession === ' Contador'){
//         resultado2 = ' Me ayudas con mi declaracion';
//     }else{
//         resultado2 = 'No conoces algun contador?';
//     }
//     resultado2 = ' Como te llamas';
// }

//prompt, es una funcion que abre una ventana, 
// con un mensaje (opcional) y con input el cual me regresa el valor 
//pero de tipo string 

// let dato = prompt('Ingresa tu nombre');
// console.log(typeof dato);
// console.log(dato);

// ejercicio 4 refactorizar ejercicio 2 


// let dato = prompt('Ingresa dia de la semana');
//  dato = Number(dato)
// switch (dato){
//         case 1:
//             console.log('Hoy es Lunes');
//             break 
//         case 2:
//             console.log('Hoy es Martes');
//             break 
//         case 3:
//             console.log('Hoy es Miercoles');
//             break 
//         case 4:
//             console.log('Hoy es Jueves');
//                 break 
//         case 5:
//             console.log('Hoy es Viernes');
//              break 
//         case 6:
//             console.log('Hoy es Sabado');
//             break 
//         case 7:
//             console.log('Hoy es Domingo');
//                 break 
    
//         default:
//             if (isNaN(dato)) {
//                 console.log ('Not a Number!');
//               }
//             else {
//                 console.log('Dia no dentro de la semana');
//             }
//             break;
// }
// for, determinado por tres condiciones: inicio, fin, incremento 

// for (let i=0, i<10, i++){
//     console.log ('Pedro');
// }

// ejemplo: imprimir el consecutivo de i 

// for (let i = 0; i < 10; i++){
//     if (i % 2 === 0)
//     console.log (i);
// }

//ejercicio 5 
// Imprimir el doble de los numeros pares dentro de la serie 
//el usuario debe ingresar un numero de inicio 
// y un numero de fin 
// si el numero es divisible entre 3 enviar un mensaje  numero divisible entre 3

// let inicio = prompt('Ingresa inicio de serie');
//   inicio = Number(inicio)
// let fin = prompt('Ingresa fin de serie');
//   fin = Number(fin)

//   for (let i = inicio; i <= fin; i++){
//     if (i % 2 === 0){
//         console.log (i * 2);
//     } else if (i % 3 === 0){
//         console.log (i + "numero divisible entre 3");
//     } else{
//         console.log ('no condicion')
//     }
// }
// while, combinacion entre iterable  y condicional   
//Mientras condicion es verdadera, hare lo que dice mi bloque
// while(condicion){}
// let pregunta = true; 
// while (pregunta){
//     console.log('Esto es una iteracion');
//     let respuesta = prompt('De nuevo: [s/n]')
//     pregunta = respuesta === 's' ? true: false;
// }
    
// Ejercicio 6 
// Se le pedira al usuario dos numeros 
// Si la division de los numeros es mayor a 10 
// se imprimira un mensaje con el resultado y se preguntara al usuario si desea hacer calculo 
// si la division de los numeros es menor a 10 
// se acabara el programa despidiendonos del usuario 

// let condicion = true 
// while (condicion){
//     let numero1 = prompt('Proporciona un numero ')
//     let numero2 = prompt('Proporciona otro numero ')
//     if ((numero1/numero2) > 10)
//         {
//             console.log("La division es mayor a 10")
//             let respuesta = prompt('De nuevo: [s/n]')
//             condicion = respuesta === 's' ? true: false;
//         }
//     else{
//         condicion = false
//     }
//     console.log ("gracias por participar")
//     }

//funciones 

// sintaxis 
// function ejemplo_funcion(){}

// function salude () {
//     alert('Hola mundo');
// }

// salude();

//parametros: valores ordenados que puede ocupar mi function) 
//pueden ser de dos tipos: obligatorios u opcionales 
//obligatorios: son los que piden al llaar la funcion y van al principio de la 
// opcionales: son los que se piden al llaaar la funcion y van al final de la lista

//(parametro 1, 2, n)
// funcion que salude al usuario con el nombre 
// function salude (nombre, juan=true) {
//     if (juan){
//         alert('Hola mundo'+ nombre + que gusto);
//     } else {
//         alert ('Hola' + nombre)
//     }
// }
// const nombre = prompt ('Como te llamas');
// salude(nombre, true);

//Ejercicio 1: preguntarle al usuario su edad 
// si tiene menos de 18 años: 'Lo siento no puedes votar'
// sitien 18 años: ' Felicidades es tu primer votacion '
// si tiene de 19 a 30 : Solo puedes votar por diputados
// sitiene de 31 en adelante: Muchas gracias por participar 

// function preguntar_edad (edad){
//     if (edad < 18) {
//         alert("Lo siento no puedes votar");
//     }else if (edad == 18){
//         alert("Felicidades es tu primer votacion");
//     }else if (edad > 19 && edad <=30){
//         alert("Solo puedes votar por diputados");
//     }
//     else if (edad >= 31){
//         alert("Muchas gracias por participar ");
//     }
// }
// let ed = prompt ('Cual es tu edad');
// dato = Number(ed)
// preguntar_edad (ed);

// FUNCION ANONIMA 
// No tienen un nombre definido 
// para poderse invocar por lo regular se almacenan en una variable 
//principal uso de una funcion anonima, es el ser un metodo en un objeto 
// sintaxis: 
//funcion (){ }
// const invocacion = function (){
//     alert ('desde funcion anonima')
// }
// invocacion();

// arrow function ()=> {}
// arrow function sin parametros _=>{}

// IIFE funciones de invocacion expontanea 
// funciones anonimas, se encapsulan entre parentesis y se invocan por el uso de ()) al final de su definicion 
// sintaxis 
// (function (){)()
//(functio (parametro1, parametro2) {})(parametro1, parametro2)
    
// (function(){
//     alert('Este mensaje debe aparecer primero')
// })

//Ejercicio2: vamos a hacer una calculadora básica 
//deben preguntar al usuario que operacion matematica quiere hacer 
//le deben pedir dos numeros 
// imprimir el resultado 
// preguntarle si quiere calcular otra vez 
// si elije que si, deberan mostrar el mensaje principal
// si elije que no, despedirse y terminar el programa 

//operaciones disponoble 
//suma
//resta
// multiplicacion 
// division
// opcional 

// function calculadora (){
//     let condicion = true
//     while (condicion){
//           let operacion = prompt('Que operacion desea realizar +, -, *, /, % ')
//           let numerouno = Number(prompt("Elige un número"));
//           let numerodos = Number(prompt("Elige un segundo número"));
//           if (operacion = "+"){
//             alert(numerouno + numerodos);
//           }
//           else if (operacion = "-"){
//             alert(numerouno - numerodos);
//           }
//           else if (operacion = "*"){
//             alert (numerouno * numerodos);
//           }
//           else if (operacion = "/"){
//             alert (numerouno / numerodos);
//           }
//           else if (operacion = "%"){
//             alert (numerouno % numerodos);
//           }
//           else {
//               alert("no caracter valido")
//           }
//           let respuesta = prompt('Desea calcular de nuevo: [s/n]')
//              condicion = respuesta === 's' ? true: false;
        
//             alert("Gracias por usar la calculadora")
//         }
    
// }
// calculadora ();

// RETURN, es el operador que me permite devolver un valor 
// no es obligatorio que una funcion devuelva un valor
// pero si lo necesita, return es la unica manera de hacerlo 
// return es lo ultimo que se ejecuta en la funcion 
// tambien de un bloque
// function calcule(num, num2){
//     return num + num2;
//     console.log('despues de la funcion');
// }
// function calcule2(num, num2){
//     if(num > num2){
//         return num - num2;
//     }else {
//         return num + num2;
//     }

   
//     console.log('despues de la funcion');
    
// }

// const variable = calcule (3,4);
// alert('el valor es' + variable);

//Ejercicio3: vamos a mejorar la calculadora básica 
//las mismas instrucciones que el ejercicio anterior
//suma: si alguno de los numeros es multiplo de 3 se cancela la operacion 
//y regresas como resultado 0 
 
// resta; si el numero1 es mayor que el numero 2 invierte valores para sumarlos 
// multiplicacion: si el numero 2 es par, sacas el doble del numero 2 y continuas con la operacion 
// division: 
// regresarias tambien el resultado del residuo 
// function calculadora (){
//     let condicion = true
//     while (condicion){
//           let operacion = prompt('Que operacion desea realizar +, -, *, /, % ')
//           let numerouno = Number(prompt("Elige un número"));
//           let numerodos = Number(prompt("Elige un segundo número"));
//           if (operacion === "+"){
//              if (numerouno % 3 === 0 || numerodos % 3 === 0){
//                 alert ("resultado es 0 ");
//              }else{ 
//                  alert(numerouno + numerodos)
//             } 
//           }
//           else if (operacion === "-"){
//               if(numerouno > numerodos){
//                   alert (numerodos - numerouno)
//               }else{
//                 alert(numerouno - numerodos);
//               }
//           }
//           else if (operacion === "*"){
//               if(numerodos % 2 === 0) {
//                 alert ( numerouno * (numerodos*2)); 
//               }else {
//                 alert (numerouno * numerodos);
//               }
//           }
//           else if (operacion === "/"){
//             alert ("Resultado" + numerouno / numerodos);
//             alert ("Residuo" + numerouno % numerodos);
//           }
//           else if (operacion === "%"){
//             alert (numerouno % numerodos);
//           }
//           else {
//               alert("no caracter valido")
//           }
//           let respuesta = prompt('Desea calcular de nuevo: [s/n]')
//              condicion = respuesta === 's' ? true: false;
        
//             alert("Gracias por usar la calculadora")
//         }
    
// }
// calculadora ();

// Arrays: Conjunto de elementos ordenados 
// su ordenacion comienza en 0 y termina en n-1 (donde n es el total de arreglos)

// declaracion de array 
// const arreglo = [];
// total de elementos 
// // propiedad length

// const elementos = [];
// console.log('total de elementos: ', elementos.length);

// // Obtener elementos de mi arreglo 
// // a partir del indice de mi elemento
// //              0        1          2        3(n-1)
// const nombres=['Juan', 'Antonio', 'Miguel', 'Leonel'];
// console.log (nombres[2]);

// // Editar valor del elemento 
// nombres[2] = 'Pedro';
// console.log(nombres);

// // Agregar valores

// // metodo push 

// nombres.push('Lorena');
// console.log(nombres);
// const nuevonombres = ['Francisco', 'Maria', 'Ernesto']
// let nombres2 = nombres.concat(nuevonombres);

// console.log(nombres2);

//Ejercicio 1: Preguntarle al usuario sus calificaciones 
// Proporcioname tu calificacion 
// Deseas agregar una nueva calificacion?
// Sacar el promedio de calificaciones 
// Si el promedio es menor a 7 enviar mensaje de "Nos vemos el siguiente semestre"
// Si el promedio es entre 7 y 8 solo "Felicidades"
// Si el promedio es de 9 o 10 ... Preguntar su nombre y se va a felicitar con su nombre 


// let condicion = true
// let calificacion = []
// let promedio = 0

// while (condicion)
//  calificacion = Number(prompt('Proporciona una calificacion'));
//   let respuesta = prompt('Deseas agregar una nueva calificacion: [s/n]')        
//   if (condicion = respuesta === 's'){
//     let calificaciondos = Number(prompt('Proporciona una nueva calificacion'));
//     console.log = ("Calificacion dos: " + calificaciondos);
//     calificacion.push(calificaciondos);

//     for (let i=0 ; i <= calificacion.length; calificacion++){
//       promedio = promedio + calificacion[i];
//       console.log ("el promedio es:" + promedio)
//     }
//   } else condicion = false;
//   {
//     alert("Tu promedio es:" + promedio);
//   } 

  // if (promedio < 7 ){
  //     alert ("Nos vemos el siguiente semestre");
  //   }else if  (promedio >= 7 && promedio <=8 ){
  //     alert ("Felicidades");
  //   }else if (promedio >=9 && promedio <=10){ 
  //     let nombre = (prompt('Proporciona tu nombre'));
  //     alert ("Felicidades " + nombre);
  //   } 
    
  
// 

// Ejercicio 2:
// Dado un arreglo de numeros aleatorios

// determinar
// cuantos son pares - generar un arreglo de ellos
// cuantos impares - generar un arreglo de ellos
// Eliminar los divisibles entre 3 del arreglo original - generar un arreglo con ellos
// obtener los divisibles entre 10 en un nuevo arreglo
// imprimir en consola los arreglos generados

// para generar numero aleatorios
// function numeroAleatorio(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }

// let aleatorios = [];
// let pares = [];
// let impares = [];
// let tres =[];
// let diez = [];

// for (let j= 0; j<20; j++){
//   aleatorios.push(numeroAleatorio(0,300));
// }
// function numeroAleatorio(min, max) {
//  return Math.round(Math.random() * (max - min) + min);
// }
// for (let i = 0; i < aleatorios.length; i++){
//   if (aleatorios[i] % 2 === 0){
//      pares.push(aleatorios[i]);
//     } else {
//       impares.push(aleatorios[i]);
//     }
//   if (aleatorios[i] % 3 === 0){
//       tres.push(aleatorios[i]);
//       aleatorios.splice(i , 1);
//     }
//   if (aleatorios[i] % 10 === 0){
//       diez.push(aleatorios[i]);
//     }
//    }
//   console.log ("Arreglo completo " + aleatorios);
//   console.log ("Numeros Pares " + pares);
//   console.log ("Numeros Impares " + impares);
//   console.log ("Divisibles en tres " + tres);
//   console.log ("Divisible en diez " + diez);

  // //Objeto: Estructura de dato donde manejamos llaves(Comunmente llamadas propiedades)
  // y valores (de cualquier tipo), podemos guardar funciones communmente llamados MediaStreamAudioDestinationNode

  // declaracion
  // const persona {};;
  // const persona = {
  //   nombre: 'Pedro'
  // };
  // persona ['direccion'] = 'Ciudad de Mèxico', 'CDMX';
  // // genera metodos 

  // persona ['saluda'] = function (){
  //   console.log ('mi nombre es: Pedro')
  // };

  // persona ['donde vivo ']= function (){
  //   console.log ('yo vivo', this.direccion)
  // };

  //POO (Programacion Orientada a Objetos)
  //OOP (Oriented Objects Programming)

  // Es un paradigma de programación que usa clases y objetos para resolver problemas 

  // abstraccion: es el obtener las caracteristicas principales

  // ejemplo:
  // Caracteristicas de un animal
  // numero de patas
  // tiene cola 
  // genero
  // tamaño 
  // clase (hervivoro, carnivoro, omnivoro)
  // peso 
  // peligro de extinsion 

  // acciones hace 
  // comer 
  // reproducirse
  // emitir sonido
  // moverse 
  // necesidades 



  // encapsulacion 
  // que la unica manera de poder ocupar propiedades 
  // y metodos a partir del objeto 
  // solo puedo afectar a la clase desde la propia clase 

  // herencia
  // que puedo heredar propiedades y metodos de una clase es decir a partir de una clase puedo crear otra clase 

  // clase chita 
  // heredar de clase animal y solo añadir las propiedades y metodos propios del chita 

  // polimorfismo 
  // que puedo hacer el mismo metodo pero de diferente manera 
  
  // chita puede moverse 
  //moverse: avanza saltando cada dos pasos 

  // funciones constructoras
  // crear una funcion, asignarla a una variable y pasar parametros si fuera necesario 
//   const Animal = function(tamano, peso, patas=4, cola=true, genero='M', clase='omnivoro', extincion){
//     this.noPatas = 4;
//     this.tieneCola = true;
//     this.genero = 'M';
//     this.tamano = null;
//     this.clase = 'omnivoro';
//     this.peso = null;
//     this.extincion = false;
// }

//   // comer 
//   this.comer = function(){
//     console.log('Esta comiendo');
//   }
//   // reproducirse
//   this.reproducirse = function(){
//     console.log('Esta reproduciendose');
//   }
//   // emitir sonido
//   this.emitirSonido = function(){
//     console.log('Esta emitiendo un sonido');
//   }
//   // moverse 
//   this.moverse = function(){
//     console.log('Esta moviendose');
//   }
//   // necesidades 
//   this.comer = function(){
//     console.log('Esta haciendo algo');
//   }

//   const animal1 = new Animal();
//   animal1.moverse();
//   animal2.emitaSonido();

//   // Ejercicio 1 
//   // trabajas en una escuela y vas a registrar a los alumnos 
//   // Genera las funciones constructoras necesarias para poder registrar a los alumnos 


//   const Alumno = function (){
//     this.nombre = null ;
//     this.apellido =null;
//     this.grado = null;
//     this.promedio = null;
//     this.telefono = null;

//   this.registroDatos = function(){
//     this.nombre =  prompt("Coloca el nombre del estudiante");
//     this.apellido =  prompt("Coloca el apellido");
//     this.telefono = Number.propmt ("Coloca el telefono");
//    }
 
//    this.registroGrado = function (){
//     this.grado = prompt ("Ingresa el grado en el que estas");
//     this.promedio = prompt ("Ingresa el promedio de tu ultimo grado");
//    }
//   }
 
  
//   const alumno1 = new Alumno();
//   alumno1.registroDatos();
//   alumno1.registroGrado();
// // Herenia entre funciones constructoras
// //Javascript solo permite heredar de una clase o funcion constructora
//   // el uso del protype 

//   const Cheeta = function(peso, tamano, patas, cola, genero, clase, extincion){
//     this.manchas = true; 
//     this.velocidad = null; 

//     Animal.call(this, peso, tamano, patas, cola, genero, clase, extincion)

//     this.moverse= function(){
//       console.log('Esta saltando cada dos pasos');
//     }
  
//   }

//   const cheeta1 = new Cheeta ('78kg, '75cm', '200m/s', true, 4, true, 'H', 'carnivoro', false );
// console.log (cheeta1);

//Ejercicio2 
// se ha solicitado una nueva funcionalidad ahora necesitamos registrar profesores 
// refactorice su codigo para poder registrar profesores y alumnos 

// const Alumno = function (){
//   this.nombre = null ;
//   this.apellido =null;
//   this.grado = null;
//   this.promedio = null;
//   this.telefono = null;

// this.registroDatos = function(){
//   this.nombre =  prompt("Coloca el nombre del estudiante");
//   this.apellido =  prompt("Coloca el apellido");
//   this.telefono = Number.propmt ("Coloca el telefono");
//  }

//  this.registroGrado = function (){
//   this.grado = prompt ("Ingresa el grado en el que estas");
//   this.promedio = prompt ("Ingresa el promedio de tu ultimo grado");
//  }
// }
// const Profesor = function(nombre, apellido, grado, promedio, telefono){
//   this.nombreProfesor = 'Pedro';
//   this.apellidoProfesor = 'Perez';
//   this.telefonoProfesor = '434384934';
//  Alumno.call (this, nombre, apellido, grado, promedio, telefono)
// }
// const registronuevo = new Profesor('Pablo', 'Ruiz', '3º', '10', '3439439');
// console.log (registronuevo);

// Clases de Javascript ES6 
// no se ocupan funciones constructoras
// ahora ocupamos la palabra reservada class y un metodo constructor 

// class Humano {
//   constructor (altura, peso){
//     // se ejecuta primero 
//     // inicializar propiedades
//     this.altura = altura; 
//     this.peso = peso; 
//   }
//   // metodos de la clase 

//   caminar (){}
//   hablar (){}
//   comer (){}
// }
// const humano1 = new Humano('1.70m', '70kg');

// humano1.hablar();

// class Alumno {
//   constructor (nombre, apellido, grado, promedio, telefono){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.grado = grado;
//     this.promedio = promedio;
//     this.telefono = telefono;
//   }
//     registroDatos (){
//       console.log ("Se registro el primer usuario");
//     }
// }
// const registrouno = new Alumno ('Juan', 'Perez', '3', '10', '3434343');
// registrouno.registroDatos()


// Herencia con clases ES6
// class Persona extends Humano{
//   constructor (altura, peso, nombre, edad){
//     super(altura, peso,);
//   }
// }
// console.log(profesor1);

// Ejercicio 4: Refactorizar la clase alumno con herencia 
// Postwork: Ejercicio completo 
//Ejercicio de la agenda telefonica con clases o tema libre 



// let nombres = [];
// let nombresDos = [];


// for (let i = 0; i < 5; i++){
//   let nombre =  prompt("Coloca un nombre");
//   nombres.push(nombre)
// }
// console.log("Lista nombres " + nombres);

  
//  const Letra = function(){
//    let letra = prompt("Coloca una letra");
//    return letra;
//  }
//  let letra = Letra();
// for (let j=0; j< nombres.length; j++){
  
//   if (nombres[j].includes(letra)){
//     nombresDos.push(nombres[j]);
//   }
// }
// console.log("Lista nombres con letra " +  letra + ": "+ nombresDos);

const nombres = [];
const vocales = ['a', 'e','i', 'o', 'u']

for (let i = 0; i < 5; i++){
  let nombresUser =  prompt("Coloca un nombre");
  nombres.push(nombresUser)
}
// [Ana, Juan, Luis] 
console.log(nombres.filter((nombre) => nombre.length % 2 === 0 || (nombre.length > 3 && vocales.includes(nombre[3]))));
 
