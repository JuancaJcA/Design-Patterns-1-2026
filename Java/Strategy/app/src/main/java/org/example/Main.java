package main.java.org.example;
import main.java.org.example.context.ViajeContext;
import main.java.org.example.strategies.*;


public class Main {
    public static void main(String[] args) {
        ViajeContext uber = new ViajeContext();
        double distancia = 20.0;

        System.out.println("\n=== SIMULADOR DE SISTEMA UBER ===\n");

        // CASO 1
        uber.setEstrategia(new TarifaNormal());
        uber.realizarCobro(distancia);

        // CASO 2
        uber.setEstrategia(new TarifaDinamica());
        uber.realizarCobro(distancia);

        // CASO 3
        ViajeContext nuevoViaje = new ViajeContext();
        nuevoViaje.realizarCobro(5);
    }
}