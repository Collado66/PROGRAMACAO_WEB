/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */


public class VerificadorIdade {
    public String Acesso(int idad) {
        if (idad > 60) {
            return "Entrada não Aconselhada";
        } else if (idad > 18) {
            return "Entrada Liberada";
        } else if (idad < 18) {
            return "Entrada Proibida";
        }
        return "Entrada Liberada"; 
    }
}
