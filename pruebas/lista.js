const ListaEnlazada = require('../src/ListaEnlazada');

console.log("INICIO DE PRUEBAS - CORREGIR HISTORIAL");

const lista = new ListaEnlazada();

console.log("\n1. Eliminar en lista vacia:");
const eliminadoVacio = lista.eliminar(d => d === "Atencion X");
console.log("Resultado de eliminar:", eliminadoVacio);
console.log("Tamano:", lista.obtenerTamanio());

lista.agregarAlFinal("Atencion 1");
lista.agregarAlFinal("Atencion 2");
lista.agregarAlFinal("Atencion 3");

console.log("\nEstado inicial con 3 elementos:", lista.aArreglo());

console.log("\n2. Eliminar la cabeza ('Atencion 1'):");
lista.eliminar(d => d === "Atencion 1");
console.log("Nueva Cabeza:", lista.cabeza.dato);
console.log("Cola:", lista.cola.dato); 
console.log("Tamano:", lista.obtenerTamanio()); 

console.log("\n3. Insertar despues de la cola ('Atencion 4' despues de 'Atencion 3'):");
lista.insertarDespuesDe(d => d === "Atencion 3", "Atencion 4");
console.log("Nueva Cola:", lista.cola.dato);
console.log("Tamano:", lista.obtenerTamanio()); 
console.log("Lista completa:", lista.aArreglo());

console.log("\n4. Eliminar la cola ('Atencion 4'):");
lista.eliminar(d => d === "Atencion 4");
console.log("Nueva Cola:", lista.cola.dato);
console.log("Tamano:", lista.obtenerTamanio());

console.log("\n5. Intentar eliminar un elemento inexistente ('Atencion 99'):");
const eliminadoInexistente = lista.eliminar(d => d === "Atencion 99");
console.log("Resultado:", eliminadoInexistente);
console.log("Tamano (debe mantenerse):", lista.obtenerTamanio());

console.log("\n6. Eliminar el unico nodo restante hasta vaciar la lista:");
lista.eliminar(d => d === "Atencion 2");
lista.eliminar(d => d === "Atencion 3");
console.log("Vacia:", lista.estaVacia());
console.log("Cabeza:", lista.cabeza);
console.log("Cola:", lista.cola);
console.log("Tamano:", lista.obtenerTamanio());

console.log("\nFIN DE PRUEBAS");