// Definicion de una Interfaz (Contrato)
interface Entidad {
    id: number;
    obtenerDetalles(): string;
}

// Clase Abstracta (No se puede instanciar)
abstract class Usuario {
    // Modificadores de acceso: public, private, protected
    protected correo: string;

    constructor(correo: string) {
        this.correo = correo;
    }

    abstract mostrarPerfil(): void;
}

// Clase que extiende de otra e implementa una interfaz
export class Estudiante extends Usuario implements Entidad {
    public id: number;
    private nombre: string;
    private promedio: number;

    // El constructor puede declarar y asignar propiedades automaticamente (Shorthand)
    constructor(id: number, nombre: string, correo: string, promedio: number) {
        super(correo); // Llamada al constructor de la clase padre
        this.id = id;
        this.nombre = nombre;
        this.promedio = promedio;
    }

    // Implementacion de metodo de la interfaz
    public obtenerDetalles(): string {
        return "ID: " + this.id + " - Nombre: " + this.nombre;
    }

    // Implementacion de metodo abstracto
    public mostrarPerfil(): void {
        console.log("Perfil del estudiante: " + this.nombre + " Correo: " + this.correo);
    }

    // Getter (Como en Java, pero con sintaxis de propiedad)
    get notaFinal(): number {
        return this.promedio;
    }
}

// Instanciacion y Polimorfismo
const alumno: Entidad = new Estudiante(1, "Pinocho", "pinocho@mail.com", 9.5);
console.log(alumno.obtenerDetalles());

const usuario: Usuario = new Estudiante(2, "Woody", "Woody@mail.com", 10);
usuario.mostrarPerfil();