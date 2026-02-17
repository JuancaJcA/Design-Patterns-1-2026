package main.java.com.aws.factory;

public class DynamoApp extends DatabaseApp {
    @Override
    public ConectorAWS crearConector() {
        return new ConectorDynamo();
    }
}