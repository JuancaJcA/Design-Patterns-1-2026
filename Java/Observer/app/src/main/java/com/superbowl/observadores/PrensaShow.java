package main.java.com.superbowl.observadores;

import main.java.com.superbowl.modelo.SistemaTickets;
import main.java.com.superbowl.patron.Observador;

public class PrensaShow implements Observador {
    @Override
    public void actualizar(SistemaTickets s) {
        if (s.getTicketsDisponibles() == 0) {
            System.out.println("[NOTICIAS]: 'Sold out' total para Bad Bunny.");
        } else {
            System.out.println("[NOTICIAS]: Se reportan " + s.getTicketsDisponibles() + " nuevas entradas.");
        }
    }
}