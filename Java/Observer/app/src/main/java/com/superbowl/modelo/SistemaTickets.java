package main.java.com.superbowl.modelo;

import main.java.com.superbowl.patron.Observador;
import main.java.com.superbowl.patron.Sujeto;
import java.util.ArrayList;
import java.util.List;

public class SistemaTickets implements Sujeto {
    private String evento = "Bad Bunny Super Bowl 2026";
    private int ticketsDisponibles = 0;
    private double precio;
    private List<Observador> observadores = new ArrayList<>();

    public void cambiarEstado(int cantidad, double nuevoPrecio) {
        this.ticketsDisponibles = cantidad;
        this.precio = nuevoPrecio;
        System.out.println("\n[SISTEMA] Actualización: " + cantidad + " tickets disponibles a $" + nuevoPrecio);
        notificar(); 
    }

    @Override
    public void suscribir(Observador o) { observadores.add(o); }

    @Override
    public void desvincular(Observador o) { observadores.remove(o); }

    @Override
    public void notificar() {
        for (Observador o : observadores) {
            o.actualizar(this);
        }
    }

    public String getEvento() { return evento; }
    public int getTicketsDisponibles() { return ticketsDisponibles; }
    public double getPrecio() { return precio; }
}