package main.java.org.example.strategies;

public class TarifaNormal implements CalculadorTarifa {
    @Override
    public double calcular(double d) { return d * 1.50; }
}