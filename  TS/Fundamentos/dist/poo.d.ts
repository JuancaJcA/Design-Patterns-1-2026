interface Entidad {
    id: number;
    obtenerDetalles(): string;
}
declare abstract class Usuario {
    protected correo: string;
    constructor(correo: string);
    abstract mostrarPerfil(): void;
}
export declare class Estudiante extends Usuario implements Entidad {
    id: number;
    private nombre;
    private promedio;
    constructor(id: number, nombre: string, correo: string, promedio: number);
    obtenerDetalles(): string;
    mostrarPerfil(): void;
    get notaFinal(): number;
}
export {};
//# sourceMappingURL=poo.d.ts.map