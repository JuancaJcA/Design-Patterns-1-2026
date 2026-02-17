package main.java.com.cafeteria;

import main.java.com.cafeteria.modelo.Bebida;
import main.java.com.cafeteria.modelo.CafeSimple;
import main.java.com.cafeteria.decoradores.Leche;
import main.java.com.cafeteria.decoradores.Chocolate;

public class Main {
    public static void main(String[] args) {
        System.out.println("------------------------------------------------");
        System.out.println("\nCAFETERÏA\n");
        System.out.println("------------------------------------------------\n");
        // Café simple
        Bebida cafe = new CafeSimple();
        
        // Lo decoramos con leche
        cafe = new Leche(cafe);
        
        // Lo decoramos con chocolate
        cafe = new Chocolate(cafe);
        
        // Lo decoramos con otra de chocolate (doble chocolate)
        cafe = new Chocolate(cafe);
        cafe = new Chocolate(cafe);
        cafe = new Chocolate(cafe);
        cafe = new Chocolate(cafe);
        

        System.out.println("\nPedido: " + cafe.getDescripcion());
        System.out.printf("Costo Total: $%.2f%n", cafe.costo());

        System.out.println("\n------------------------------------------------\n");
    }
}