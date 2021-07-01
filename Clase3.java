import java.util.Scanner;

public class Clase3 {
    
    public static void main(String[] args) {
        //(12/07/1980)= 12+7+1980 = 1999 = 28

        //var x = (1 % 10);
        //System.out.println(x);

        var sc = new Scanner(System.in);
        System.out.println("Ingrese la fecha de nacimiento (dd/mm/yyyy): ");
        var fecha = sc.next();
        System.out.println(fecha);
        //System.out.println(fecha.trim());
        fecha = fecha.trim();
        //12/07/1980
        fecha = fecha.replaceAll("/","");
        System.out.println(fecha);

        int dia = Integer.valueOf(fecha.substring(0,2));
        System.out.println(dia);

        int mes = Integer.valueOf(fecha.substring(2,4));
        System.out.println(mes);

        int anio = Integer.valueOf(fecha.substring(4));
        System.out.println(anio);

        int sum1 = dia + mes + anio;

        System.out.println(sum1);

        //int aux = (dia / 10) + (dia % 10) + (mes / 10) + (mes % 10) + anio;        
        int numeroSuerte = 0;     
        while (sum1 != 0) {        
            //System.out.print("digito: " + sum1);           
            numeroSuerte += (sum1 % 10);           
            sum1 /= 10;      
        }
        System.out.println(numeroSuerte);
        /*
        
        int sum2 = 0;
        while(sum1 != 0){
            sum1 %= 10;
            sum2 += sum1;
            //System.out.println(sum2);

            //break;
        }
        System.out.println(sum2);
        */
        

        
    }

}
