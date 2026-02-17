package com.aws.factory;

import main.java.com.aws.factory.DatabaseApp;
import main.java.com.aws.factory.DynamoApp;
import main.java.com.aws.factory.RDSApp;

public class Main {
    private static DatabaseApp app;

    public static void main(String[] args) {
        System.out.println("------------------------------------------------");
        System.out.println("\nSISTEMA AWS FACTORY\n");
        System.out.println("------------------------------------------------\n");

        String tipoDB = "DYNAMO"; 

        if (tipoDB.equals("RDS")) {
            app = new RDSApp();
        } else {
            app = new DynamoApp();
        }

        app.operarBaseDeDatos("INSERT INTO Logs (id, msg) VALUES (101, 'HOLA MUNDO')");
        System.out.println("\n------------------------------------------------\n");
    }
}