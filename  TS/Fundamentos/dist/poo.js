"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
// Clase Abstracta (No se puede instanciar)
class Usuario {
    // Modificadores de acceso: public, private, protected
    correo;
    constructor(correo) {
        this.correo = correo;
    }
}
// Clase que extiende de otra e implementa una interfaz
class Estudiante extends Usuario {
    id;
    nombre;
    promedio;
    // El constructor puede declarar y asignar propiedades automaticamente (Shorthand)
    constructor(id, nombre, correo, promedio) {
        super(correo); // Llamada al constructor de la clase padre
        this.id = id;
        this.nombre = nombre;
        this.promedio = promedio;
    }
    // Implementacion de metodo de la interfaz
    obtenerDetalles() {
        return "ID: " + this.id + " - Nombre: " + this.nombre;
    }
    // Implementacion de metodo abstracto
    mostrarPerfil() {
        console.log("Perfil del estudiante: " + this.nombre + " Correo: " + this.correo);
    }
    // Getter (Como en Java, pero con sintaxis de propiedad)
    get notaFinal() {
        return this.promedio;
    }
}
exports.Estudiante = Estudiante;
// Instanciacion y Polimorfismo
const alumno = new Estudiante(1, "Pinocho", "pinocho@mail.com", 9.5);
console.log(alumno.obtenerDetalles());
const usuario = new Estudiante(2, "Woody", "Woody@mail.com", 10);
usuario.mostrarPerfil();
//# sourceMappingURL=poo.js.map