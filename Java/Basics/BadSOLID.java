public class BadSOLID {
    
    public void pagar(String tipo) {
        if (tipo.equals("PayPal")) {
            System.out.println("Pagando con PayPal...");
        } else if (tipo.equals("Tarjeta")) {
            System.out.println("Pagando con Tarjeta...");
        }
    }

    public void generarReportePDF() {
        System.out.println("Generando PDF... (Esto no debería estar aquí)");
    }
}