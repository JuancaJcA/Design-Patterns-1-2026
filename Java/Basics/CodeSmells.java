public class CodeSmells {
    public String[] d; 

    public void procesar(int tipo) {
        if (tipo == 1) {
            
            System.out.println("Guardando cliente...");
            // ... 50 líneas más...
        } else if (tipo == 2) {
            System.out.println("Guardando factura...");
            // ... 50 líneas más de código duplicado...
        }
    }

    public void setVal(int v) {
        this.v = v;
    }
    private int v;
}