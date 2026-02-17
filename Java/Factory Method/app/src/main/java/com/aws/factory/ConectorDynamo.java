package main.java.com.aws.factory;

public class ConectorDynamo implements ConectorAWS {
    @Override
    public void conectar() {
        System.out.println(">>> Inicializando cliente de Amazon DynamoDB...");
        System.out.println(">>> (STATUS) Sesión activa en tabla NoSQL mediante IAM Role.");
    }

    @Override
    public void ejecutarQuery(String query) {
        System.out.println(">>> Realizando PutItem/Query en DynamoDB (JSON format): " + query);
    }
}