"use strict";
/**
 * DIFERENCIAS ENTRE VARIABLES Y MODIFICADORES
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 1. let: Variable con ámbito de bloque (Recomendado para valores que cambian)
// Es similar a una variable normal en un método de Java.
let puntaje = 10;
puntaje = 11; // Permitido: se puede reasignar.
// 2. const: Constante de bloque (No se puede reasignar)
// Es el equivalente a 'final' en Java.
const URL_API = "https://api.netflix.com";
// URL_API = "otra"; // Error: No se puede cambiar el valor de una constante.
// 3. Modificadores dentro de una Clase (POO)
class CuentaBancaria {
    // public: Accesible desde cualquier lugar (Valor por defecto en TS)
    titular;
    // private: Solo accesible DENTRO de esta clase (Igual que en Java)
    saldo;
    // readonly: El valor solo se puede asignar en el constructor y no cambia más
    // Es como un 'private final' de Java.
    numeroCuenta;
    // protected: Accesible en esta clase y en sus "hijos" (herencia)
    tipoCuenta;
    constructor(titular, saldoInicial, cuenta) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.numeroCuenta = cuenta;
        this.tipoCuenta = "Ahorros";
    }
    depositar(monto) {
        this.saldo += monto; // Internamente puedo modificar lo privado
    }
}
/**
 * TIPOS DE ASIGNACIÓN
 */
// Asignación con tipo explícito (Estilo Java)
let matricula = 4500;
// Asignación con tipo inferido (TS deduce que es string)
let ciudad = "Madrid";
// Asignación Uniones (Union Types): La variable puede ser de dos tipos
// Esto no existe en Java y es muy potente en TS.
let identificacion;
identificacion = "AB-123"; // Válido
identificacion = 500200; // También válido
// Asignación de Arreglos (Listas)
let materias = ["Matemáticas", "Física"];
// Asignación de Objetos Literales (Estructural)
const configuracion = {
    tema: "oscuro",
    fuente: 14
};
//# sourceMappingURL=variables.js.map