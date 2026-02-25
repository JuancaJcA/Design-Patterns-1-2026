"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declaracion de variables con tipado explicito e inferido
let nombre = "Estudiante"; // Equivalente a String en Java
let edad = 20; // Equivalente a int/double (TS solo tiene 'number')
let esActivo = true; // Equivalente a boolean
let variableInferida = 50; // TS deduce que es 'number'
// Vectores y Arreglos (Arrays)
// En TS, los arreglos son dinamicos (similares a ArrayList en Java)
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Pepe", "Grillo"]; // Sintaxis alternativa
// Estructuras de control
// Condicionales (identicos a Java)
if (edad >= 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("Es menor de edad");
}
// Switch
let opcion = 2;
switch (opcion) {
    case 1:
        console.log("Opcion 1");
        break;
    default:
        console.log("Opcion por defecto");
}
// Bucles (Loops)
// Bucle for tradicional
for (let i = 0; i < numeros.length; i++) {
    console.log("Indice " + i + ": " + numeros[i]);
}
// Bucle for-of (Equivalente al for-each de Java)
for (let num of numeros) {
    console.log("Valor: " + num);
}
// Casts (Aseveraciones de tipo)
// Se usa cuando sabemos el tipo de una variable pero el compilador no
let valorCualquiera = "Esto es un texto";
let longitud = valorCualquiera.length;
let longitudAlternativa = valorCualquiera.length;
//# sourceMappingURL=fundamentos.js.map