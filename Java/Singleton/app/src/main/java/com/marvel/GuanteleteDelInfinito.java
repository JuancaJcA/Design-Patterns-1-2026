package app.src.main.java.com.marvel;

public class GuanteleteDelInfinito {
    private static GuanteleteDelInfinito instancia;
    protected GuanteleteDelInfinito() { System.out.println("Forjando Guantelete Original en un lugar remoto de Bolivia..."); }

    public static GuanteleteDelInfinito getInstancia() {
        if (instancia == null) {
            String universo = System.getProperty("UNIVERSO", "NORMAL");
            if ("STARK".equals(universo)) instancia = new GuanteleteTecnologico();
            else instancia = new GuanteleteDelInfinito();
        }
        return instancia;
    }

    public void chasquearDedos() {
        System.out.println("\n--------> CHASQUIDO! Mitad de la clase falta a clases?");
    }
}
