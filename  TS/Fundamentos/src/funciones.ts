// Funcion sin parametros y sin retorno (void)
function saludar(): void {
    console.log("Hola desde una funcion void");
}

// Funcion con parametros y retorno
// Los tipos de los parametros y el retorno se declaran explicitamente
function sumar(a: number, b: number): number {
    return a + b;
}

// Funcion con parametros opcionales (Usando el signo '?')
// En Java se usaria sobrecarga de metodos; en TS se usa esto o valores por defecto
function mostrarMensaje(texto: string, remitente?: string): void {
    if (remitente) {
        console.log(texto + " de " + remitente);
    } else {
        console.log(texto);
    }
}

// Funcion con valores por defecto
function potenciar(base: number, exponente: number = 2): number {
    return Math.pow(base, exponente);
}

// Llamadas a las funciones
saludar();
let resultado: number = sumar(10, 5);
mostrarMensaje("Tarea entregada");
mostrarMensaje("Tarea entregada", "Profesor");