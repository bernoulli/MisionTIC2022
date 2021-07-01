//package com.mbueno.intro;
//import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.io.IOException;

public class inicio {

	public static void main(String[] args) throws IOException{
		
		//mensajepantalla();
		//solicitaDatos();
		//elsaludo();
		//preguntaEntero();
		//duploTriple();
		aFahrenheint();
		//parImpar();
		//String y = "Hola";
		// char y = (char) 'a'; // No se pueden cambiar los tipos de una variable declarada.
		
		
	}
	
	public static void mensajepantalla(){
		System.out.println( "Bienvenido a la programación en Java!" );
	}
	
	public static void solicitaDatos() throws IOException{

		
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Por favor introduzca un texto:");
		String x = br.readLine();
		System.out.println("Hola " + x);
		//br.close();

		/* BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Por favor ingrese su nombre"
		String nombre = br.readLine();
		System.out.println("Hola " + nombre); */


		/* Scanner input = new Scanner(System.in);
		System.out.print("Por favor introduzca un texto:");
		String x = input.nextLine();
		System.out.print("El texto introducido es: ");
		System.out.println(x);
		input.close(); */ 
	}
	
	public static void elsaludo() {
		Scanner sc = new Scanner(System.in);
		System.out.println("Por favor ingrese el nombre: ");
		var nombre = sc.nextLine();

		//var nombre = "Miguel Angel";
		var resultado = saludo(nombre);
		System.out.println(resultado);
	}
	
	public static String saludo(String nombre) {
		return "Hola " + nombre + "!";
	}

	public static void preguntaEntero() {
		var sc = new Scanner(System.in);
		System.out.println("Introduzca un número de dos o más cifras: ");
		var numero = sc.nextInt();
		var digitos = numeroDigitos(numero);
		System.out.println("El número digitado tiene " + digitos + " cifras");
	}

	private static Object numeroDigitos(int numero) {
		var cifras = 0;
		while (numero != 0) {//1327
			numero /= 10; //numero = 1327/10=132
			cifras++;//110
		}
		return cifras;
	}

	@SuppressWarnings({ "resource", "unused" })
	private static void duploTriple() {
		var entre = new Scanner(System.in);
		System.out.println("Introduzca un número entero: ");
		int numero = entre.nextInt();
		System.out.println("Su número " + numero 
				+ " si lo duplicamos nos da " + (numero * 2) 
				+ " y si lo triplicamos nos da " + (numero * 3));
	}

	@SuppressWarnings({ "resource", "unused" })
	private static void aFahrenheint() {
		var scan = new Scanner(System.in);
		System.out.println("Introduzca la temperatura en Grados Centígrados: ");
		var gc = scan.nextDouble();
		var fahr = 32 + (9 * gc / 5 );

		//var fahrenh = pasoGrados(gc);
		System.out.println("Sus grados Centígrados: " + gc + ", pasados a Fahrenheint dan: " + fahr + " ");
	}

	private static Object pasoGrados(Double gc) {
		var fahr = 32 + (9 * gc / 5 );
		
		return fahr;
	}

	@SuppressWarnings({ "unused", "resource" })
	private static void parImpar() {
		var entrada = new Scanner(System.in);
		System.out.println("Introduzca un número entero: ");
		var numero = entrada.nextInt();
		System.out.println("Su numero: " + numero + (numero % 2 == 0 ? ", es número Par": ", es número Impar")); 
	}
	
	
}
