package main.java.com.aws.factory;

public abstract class DatabaseApp {

    // Factory Method:
    public abstract ConectorAWS crearConector();

    // Lógica que usa el Factory Method y usa la interfaz:
    public void operarBaseDeDatos(String script) {
        ConectorAWS conector = crearConector();
        conector.conectar();
        conector.ejecutarQuery(script);
    }
}