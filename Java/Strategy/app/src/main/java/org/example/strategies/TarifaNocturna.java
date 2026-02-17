package main.java.org.example.strategies;

public class TarifaNocturna implements CalculadorTarifa {
    @Override
    public double calcular(double d) { return (d * 1.50) + 5.0; }
}