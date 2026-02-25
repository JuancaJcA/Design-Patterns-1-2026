package app.src.main.java.com.marvel;

public class Main {
    public static void main(String[] args) {
        System.out.println("-----------------------------------------------------------------------------------------");
        System.out.println("\nGUANTELETE DE THANOS\n");
        System.out.println("-----------------------------------------------------------------------------------------\n");
        // CASO 1: Universo Normal (Thanos)
        //System.setProperty("UNIVERSO", "NORMAL");
        //GuanteleteDelInfinito g1 = GuanteleteDelInfinito.getInstancia();
        //g1.chasquearDedos(); 

        // CASO 2: Cambio de realidad (Endgame)
        System.setProperty("UNIVERSO", "STARK");
        GuanteleteDelInfinito gStark = GuanteleteDelInfinito.getInstancia();
        gStark.chasquearDedos(); 

        System.out.println("-----------------------------------------------------------------------------------------\n");
    }
}
