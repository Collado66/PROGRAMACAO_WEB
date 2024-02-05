/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/UnitTests/JUnit5TestClass.java to edit this template
 */

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;


public class VerificadorIdadeTest {
    
    @Test
    public void testAcessoLiberado() {
        VerificadorIdade verifica = new VerificadorIdade();
        assertEquals("Entrada Liberada", verifica.Acesso(19));
    }

    @Test
    public void testAcessoProibido() {
        VerificadorIdade verifica = new VerificadorIdade();
        assertEquals("Entrada Proibida", verifica.Acesso(15));
    }

    @Test
    public void testAcessoNaoAconselhado() {
        VerificadorIdade verifica = new VerificadorIdade();
        assertEquals("Entrada não Aconselhada", verifica.Acesso(61));
    }
}
