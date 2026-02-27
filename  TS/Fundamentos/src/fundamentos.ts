// Declaracion de variables con tipado explicito e inferido
let nombre: string = "Estudiante"; // Equivalente a String en Java
let edad: number = 20;             // Equivalente a int/double (TS solo tiene 'number')
let esActivo: boolean = true;      // Equivalente a boolean
let variableInferida = 50;         // TS deduce que es 'number'

// Vectores y Arreglos (Arrays)
// En TS, los arreglos son dinamicos (similares a ArrayList en Java)
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: Array<string> = ["Pepe", "Grillo"]; // Sintaxis alternativa

// Estructuras de control
// Condicionales (identicos a Java)
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// Switch
let opcion: number = 2;
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
let valorCualquiera: any = "Esto es un texto";
let longitud: number = (valorCualquiera as string).length;
let longitudAlternativa: number = (<string>valorCualquiera).length;