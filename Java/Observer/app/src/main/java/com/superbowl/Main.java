package main.java.com.superbowl;

import main.java.com.superbowl.modelo.SistemaTickets;
import main.java.com.superbowl.observadores.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("------------------------------------------------");
        System.out.println("\nTICKET-MASTER: EDICIÓN BAD BUNNY\n");
        System.out.println("------------------------------------------------\n");
        
        // 1. El Sujeto
        SistemaTickets sistema = new SistemaTickets();

        // 2. Los Observadores
        FanEntusiasmado benitoFan = new FanEntusiasmado("Benito");
        FanEntusiasmado maria = new FanEntusiasmado("Nicole");
        PrensaShow cnn = new PrensaShow();

        // 3. Suscripción (Acoplamiento Abstracto)
        sistema.suscribir(benitoFan);
        sistema.suscribir(maria);
        sistema.suscribir(cnn);

        // CASO 1: Se liberan entradas caras
        sistema.cambiarEstado(10, 800.0);

        // CASO 2: Rebaja
        sistema.cambiarEstado(5, 450.0);

        // CASO 3: Se agotan
        sistema.cambiarEstado(0, 0);

        System.out.println("\n------------------------------------------------\n");
    }
}