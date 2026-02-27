interface Saludo {
    mensaje: string;
    autor: string;
}

const bienvenida: Saludo = {
    mensaje: "Hola Mundo",
    autor: "Juan Carlos",
};

console.log(bienvenida.mensaje + " por " + bienvenida.autor);
