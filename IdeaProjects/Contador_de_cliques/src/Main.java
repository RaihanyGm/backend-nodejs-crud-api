import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Scanner;

class Valores{
    static String valorTextField ;
    static int valor1 = 0;
}
public class Main {
    public static void main(String[] args) {


        JFrame frame = new JFrame("Exemplo de JButton");
        frame.setSize(150, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(null);

        JLabel label = new JLabel();
        label.setBounds(30, 100, 50, 30);

        JTextField field = new JTextField();
        field.setBounds(20, 20, 100, 40);
        field.disable();

        JButton button1 = new JButton("Clique aqui!");
        button1.setBounds(18, 80, 100, 40);


        button1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Valores.valor1 ++;
                field.setText(String.valueOf(Valores.valor1));

            }
        });


        frame.add(label);
        frame.add(field);
        frame.add(button1);

        frame.setVisible(true);

        }
    }
