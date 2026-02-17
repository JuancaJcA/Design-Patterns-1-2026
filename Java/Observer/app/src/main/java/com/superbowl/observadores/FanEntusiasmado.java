package main.java.com.superbowl.observadores;

import main.java.com.superbowl.modelo.SistemaTickets;
import main.java.com.superbowl.patron.Observador;

public class FanEntusiasmado implements Observador {
    private String nombre;

    public FanEntusiasmado(String nombre) { this.nombre = nombre; }

    @Override
    public void actualizar(SistemaTickets s) {
        if (s.getTicketsDisponibles() > 0 && s.getPrecio() < 500) {
            System.out.println("[FAN: " + nombre + "]: No lo puedo creer! Hay tickets! COMPRANDOOOO!!!");
        } else if (s.getTicketsDisponibles() > 0) {
            System.out.println("[FAN: " + nombre + "]: Hay tickets, pero están muy caros... esperaré");
        }
    }
}
