package main.java.com.superbowl.patron;

import main.java.com.superbowl.modelo.SistemaTickets;

public interface Observador {
    void actualizar(SistemaTickets sistema);
}
