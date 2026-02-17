package main.java.com.cafeteria.decoradores;

import main.java.com.cafeteria.modelo.Bebida;

public class Leche extends AgregadoDecorator {
    public Leche(Bebida bebida) {
        this.bebida = bebida;
    }

    @Override
    public String getDescripcion() {
        return bebida.getDescripcion() + " + Leche";
    }

    @Override
    public double costo() {
        return bebida.costo() + 0.50;
    }
}