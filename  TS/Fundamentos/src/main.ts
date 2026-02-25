// Suponiendo que exportamos las clases en los archivos anteriores
// Ejemplo: export class Estudiante { ... }

import { Estudiante } from "./poo";

// Punto de entrada del programa
const nuevoEstudiante = new Estudiante(101, "Roberto", "gomez@u.edu", 8);

console.log("Nombre del estudiante: " + nuevoEstudiante.obtenerDetalles());

// Demostracion de objetos literales (Tipado estructural)
// No necesita una clase para cumplir con una interfaz
interface Punto {
    x: number;
    y: number;
}

function imprimirCoordenadas(p: Punto) {
    console.log("Coordenada X: " + p.x + ", Coordenada Y: " + p.y);
}

// Objeto creado "al vuelo" que cumple con la interfaz Punto
const miPunto = { x: 50, y: 150 };
imprimirCoordenadas(miPunto);