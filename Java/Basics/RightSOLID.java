interface MetodoPago {
    void procesar(double monto);
}

class PagoPaypal implements MetodoPago {
    public void procesar(double monto) {
        System.out.println("Pagando " + monto + " con PayPal.");
    }
}

class PagoTarjeta implements MetodoPago {
    public void procesar(double monto) {
        System.out.println("Pagando " + monto + " con Tarjeta.");
    }
}

class ProcesadorDePagos {
    public void ejecutar(MetodoPago metodo, double monto) {
        metodo.procesar(monto);
    }
}

public class RightSOLID {
    public static void main(String[] args) {
        ProcesadorDePagos procesador = new ProcesadorDePagos();
        
        procesador.ejecutar(new PagoPaypal(), 100.50);
        procesador.ejecutar(new PagoTarjeta(), 500.00);
    }
}