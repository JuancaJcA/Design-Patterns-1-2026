package main.java.org.example.strategies;

public class TarifaDinamica implements CalculadorTarifa {
    @Override
    public double calcular(double d) { return d * 4.0; }
}