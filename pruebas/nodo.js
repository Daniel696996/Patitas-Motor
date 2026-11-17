const Nodo = require('../src/Nodo');

atencion.siguiente = null; // Rompemos el enlace a propósito  

const atencion = new Nodo({
    fecha: '02/02',
    motivo: 'vacunacion',
    veterinaria: 'Dra. Rios',
    costo: 85000

});
const atencion1 = new Nodo({
    fecha: '15/03',
    motivo: 'control de peso',
    veterinaria: 'Dra. Gomez',
    costo: 40000

});
const atencion2 = new Nodo({
    fecha: '20/05',
    motivo: 'Limpieza dental',
    veterinaria: 'Dra. Rios',
    costo: 150000

});
atencion.siguiente = atencion1;
atencion1.siguiente = atencion2;
atencion2.siguiente = null;

const cabeza = atencion;

let actual = cabeza;
while (actual !== null) {
    console.log("Nodo: ", actual.dato)
    actual = actual.siguiente;
}

let acomulador = 0
actual = cabeza

while (actual !== null) {
    acomulador +=(actual.dato.costo);
    actual = actual.siguiente;
}

console.log("Costo.total", acomulador);
