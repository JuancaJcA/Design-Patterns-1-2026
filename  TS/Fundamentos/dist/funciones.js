"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcion sin parametros y sin retorno (void)
function saludar() {
    console.log("Hola desde una funcion void");
}
// Funcion con parametros y retorno
// Los tipos de los parametros y el retorno se declaran explicitamente
function sumar(a, b) {
    return a + b;
}
// Funcion con parametros opcionales (Usando el signo '?')
// En Java se usaria sobrecarga de metodos; en TS se usa esto o valores por defecto
function mostrarMensaje(texto, remitente) {
    if (remitente) {
        console.log(texto + " de " + remitente);
    }
    else {
        console.log(texto);
    }
}
// Funcion con valores por defecto
function potenciar(base, exponente = 2) {
    return Math.pow(base, exponente);
}
// Llamadas a las funciones
saludar();
let resultado = sumar(10, 5);
mostrarMensaje("Tarea entregada");
mostrarMensaje("Tarea entregada", "Profesor");
//# sourceMappingURL=funciones.js.map