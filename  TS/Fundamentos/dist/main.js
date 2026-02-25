"use strict";
// Suponiendo que exportamos las clases en los archivos anteriores
// Ejemplo: export class Estudiante { ... }
Object.defineProperty(exports, "__esModule", { value: true });
const poo_1 = require("./poo");
// Punto de entrada del programa
const nuevoEstudiante = new poo_1.Estudiante(101, "Roberto", "gomez@u.edu", 8);
console.log("Nombre del estudiante: " + nuevoEstudiante.obtenerDetalles());
function imprimirCoordenadas(p) {
    console.log("Coordenada X: " + p.x + ", Coordenada Y: " + p.y);
}
// Objeto creado "al vuelo" que cumple con la interfaz Punto
const miPunto = { x: 50, y: 150 };
imprimirCoordenadas(miPunto);
//# sourceMappingURL=main.js.map