package main.java.org.example.context;
import main.java.org.example.strategies.CalculadorTarifa;

public class ViajeContext {
    private CalculadorTarifa estrategia;

    public void setEstrategia(CalculadorTarifa estrategia) {
        this.estrategia = estrategia;
    }

    public void realizarCobro(double distancia) {
        if (estrategia == null) {
            System.out.println("ALERTA: No se ha seleccionado un algoritmo de tarifa.\n");
            return;
        }
        double total = estrategia.calcular(distancia);
        System.out.println("Aplicando " + estrategia.getClass().getSimpleName() + "...");
        System.out.println("Total para " + distancia + " km: $" + total);
        System.out.println("\n------------------------------------\n");
    }
}
