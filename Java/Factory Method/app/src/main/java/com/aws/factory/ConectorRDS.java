package main.java.com.aws.factory;

public class ConectorRDS implements ConectorAWS {
    @Override
    public void conectar() {
        System.out.println(">>> Estableciendo conexión segura con Amazon RDS (MySQL/PostgreSQL)...");
        System.out.println(">>> (STATUS) Conectado a la instancia rds-db-01.aws.com");
    }

    @Override
    public void ejecutarQuery(String query) {
        System.out.println(">>> Ejecutando SQL en RDS: " + query);
    }
}