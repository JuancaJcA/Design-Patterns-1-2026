package main.java.com.superbowl.patron;

public interface Sujeto {
    void suscribir(Observador o);
    void desvincular(Observador o);
    void notificar();
}
