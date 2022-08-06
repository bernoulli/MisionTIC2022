public class BecaUniversitaria {

    // -----------------------------------------------------------------
    // Atributos
    // -----------------------------------------------------------------

    /**
     * Valor del Tiempo.
     */
    private int tiempo;

    /**
     * Valor de la Beca Universitaria
     */
    private double monto;

    /**
     * Tasa de interés efectiva mensual del proyecto
     */
    private double interes;

    // -----------------------------------------------------------------
    // Métodos
    // -----------------------------------------------------------------

    /**
     * Construye el proyecto. <br>
     * <b>post: </b> Se creó un nuevo proyecto con los siguientes valores: <br>
     * Proyecto: UTP.
     */
    public BecaUniversitaria() {
        tiempo = 0;
        monto = 0;
        interes = 0;
    }

    public BecaUniversitaria(int pTiempo, double pCapital, double pInteres) {
        this.tiempo = pTiempo;
        this.monto = pCapital;
        this.interes = pInteres;
    }

    /**
     * Retorna el interes simple, monto, capital en una cadena de texto.
     * 
     * @return El total de interes simples generados en número.
     */
    public double calcularInteresSimple() {
        double interesSimple = monto * (interes / 100) * tiempo;
        return Math.round(interesSimple);
    }

    /**
     * Retorna el interes compuesto, monto, capital en una cadena de texto.
     * 
     * @return El total de interes compuestos generados en número.
     */
    public double calcularInteresCompuesto() {
        double interesCompuesto = monto * (Math.pow(1 + interes / 100, tiempo) - 1);
        return Math.round(interesCompuesto);
    }

    /**
     * Método para comparar la diferencia en el total de intereses generados para el
     * proyecto.
     * 
     * @return Respuesta al Reto.
     */
    public String compararInversion(int pTiempo, double pMonto, double pInteres) {

        this.tiempo = pTiempo;
        this.monto = pMonto;
        this.interes = pInteres;

        /* Cálculo de la diferencia entre tipos de tasas */
        double diferencia = calcularInteresCompuesto() - calcularInteresSimple();

        if (diferencia != 0) {
            return "La diferencia entre la proyeccion de interes compuesto e interes simple es: $" + diferencia;
        } else {
            return "No se obtuvo diferencia entre las proyecciones, revisar los parametros de entrada.";
        }

    }

    public String compararInversion() {
        double diferencia = 0;

        /* Cálculo de la diferencia entre tipos de tasas */
        diferencia = calcularInteresCompuesto() - calcularInteresSimple();

        // Revisar la diferencia obtenida
        if (diferencia != 0) {
            return "La diferencia entre la proyección de interés compuesto e interés simple es: $" + diferencia;
        } else {
            return "No se obtuvo diferencia entre las proyecciones, revisar los parámetros de entrada.";
        }
    }
}