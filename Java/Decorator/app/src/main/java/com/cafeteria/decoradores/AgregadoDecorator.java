package main.java.com.cafeteria.decoradores;

import main.java.com.cafeteria.modelo.Bebida;

public abstract class AgregadoDecorator extends Bebida {
    protected Bebida bebida;

    public abstract String getDescripcion();
}