package main.java.com.aws.factory;

public interface ConectorAWS {
    void conectar();
    void ejecutarQuery(String query);
}