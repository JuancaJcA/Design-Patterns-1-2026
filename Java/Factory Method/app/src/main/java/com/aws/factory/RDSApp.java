package main.java.com.aws.factory;

public class RDSApp extends DatabaseApp {
    @Override
    public ConectorAWS crearConector() {
        return new ConectorRDS();
    }
}