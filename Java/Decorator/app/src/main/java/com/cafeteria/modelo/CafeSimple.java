package main.java.com.cafeteria.modelo;

public class CafeSimple extends Bebida {
    public CafeSimple() {
        descripcion = "Cafe Simple";
    }

    @Override
    public double costo() {
        return 1.50;
    }
}