public class CleanCode {
    private String[] listaDocumentos;

    public void guardarCliente() {
        validarInformacion();
        ejecutarGuardado("Cliente");
    }

    public void guardarFactura() {
        ejecutarGuardado("Factura");
    }

    private void validarInformacion() {
        // Lógica...
    }

    private void ejecutarGuardado(String tipo) {
        System.out.println("Guardando " + tipo + " en la base de datos...");
    }
}