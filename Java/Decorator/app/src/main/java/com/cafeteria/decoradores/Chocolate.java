package main.java.com.cafeteria.decoradores;

import main.java.com.cafeteria.modelo.Bebida;

public class Chocolate extends AgregadoDecorator {
    public Chocolate(Bebida bebida) {
        this.bebida = bebida;
    }

    @Override
    public String getDescripcion() {
        return bebida.getDescripcion() + " + Chocolate";
    }

    @Override
    public double costo() {
        return bebida.costo() + 0.70;
    }
}
