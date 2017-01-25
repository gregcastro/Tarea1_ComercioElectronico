package recurso;

/**
 *
 * @author Jose Castro
 */
public class Global {

    public Global() {
    }
        
    public boolean valido(String mes, String anio) {

        int m, y;
        try {
            m = Integer.parseInt(mes);
            y = Integer.parseInt(anio);
                        
        } catch (NumberFormatException e) {
            System.out.println("Error: " + e);
            return false;
        }
        
        return m>0 && m<13 && y<2018;
        
    }
    
}
