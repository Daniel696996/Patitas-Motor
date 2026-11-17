const ListaEnlazada = require('../src/ListaEnlazada');

console.log("pruebas");

const lista = new ListaEnlazada();

console.log("\n1. Lista vacia:");
console.log("Vacia:", lista.estaVacia());
console.log("Tamano:", lista.obtenerTamanio());
console.log("Cabeza:", lista.cabeza);
console.log("Cola:", lista.cola);

console.log("\n2. Agregar primer elemento al final ('Atencion 1'):");
lista.agregarAlFinal("Atencion 1");
console.log("Tamano:", lista.obtenerTamanio());
console.log("Cabeza:", lista.cabeza.dato);
console.log("Cola:", lista.cola.dato);

console.log("\n3. Agregar al inicio ('Atencion 0'):");
lista.agregarAlInicio("Atencion 0");
console.log("Tamano:", lista.obtenerTamanio());
console.log("Cabeza:", lista.cabeza.dato);
console.log("Cola:", lista.cola.dato);

console.log("\n4. Agregar al final con varios elementos ('Atencion 2'):");
lista.agregarAlFinal("Atencion 2");
console.log("Tamano:", lista.obtenerTamanio());
console.log("Cabeza:", lista.cabeza.dato);
console.log("Cola:", lista.cola.dato);

console.log("\nLista completa en arreglo:");
console.log(lista.aArreglo());

console.log("\nfin");