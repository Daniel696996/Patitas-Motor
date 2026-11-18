( Nodo.js ) ---> (atencion: Vacunacion)
                       |
                 (atencion1: Control de peso)
                       |
                 (atencion2: Limpieza dental)
                       |
                     null

agregue "atencion.siguiente = null;" y el ciclo while solo imprime la primera atencion que es vacunacion y el programa terminara de inmediato si perdemos un enlace y En el costo total el acumulador solo sumara el costo de la primera atención ($85.000) y no hagarra los los $40.000 y $150.000 de las siguientes atenciones

# Patitas Motor

Proyecto en JavaScript (Node.js) para gestionar historiales veterinarios usando listas enlazadas.

## Estructura del Proyecto

* src/Nodo.js: Clase Nodo con dato y siguiente.
* src/ListaEnlazada.js: Lógica de la lista enlazada (cabeza, cola, tamaño, métodos).
* pruebas/nodo.js: Pruebas de nodos.
* pruebas/lista.js: Pruebas de la lista y casos borde.
* bitacora.md: Diagramas y análisis de complejidad.

## Funcionalidades

* Inserción al inicio y final en O(1).
* Recorrido y conversión a arreglo.
* Búsqueda por condición.
* Inserción de nodos después de una condición.
* Eliminación de nodos manejando cabeza, cola y lista vacía.

## Ejecución

node pruebas/lista.js