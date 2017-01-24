
package webservices;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import org.json.JSONObject;

/**
 *
 * @author Jose Castro
 */
@Path("/servidor/disponibilidad/{fecha}")
public class Servidor {
    
    /*
    Ruta de prueba:
    localhost:8080/servidor/disponibilidad/01-2016
    */
    
    @GET
    @Produces("application/json")
    public String disponibilidad(@PathParam("fecha") String fecha) {
        JSONObject obj = new JSONObject();
        
        try {
            double disponibilidad = Math.random()*1;
            String[] fechas = fecha.split("-");
            System.out.println("Mes = " + fechas[0]);
            System.out.println("Año = " + fechas[1]);
            
            /*
            1. obtener fecha atual
            2. verificar que el año y el mes son validos
            3. si no es valido colocar REQUEST IS BAD
            4. Crear otro random, si el random esta entre [0,8] si se dara respuesta, en caso contrario no
            */
            
            obj.put("nombre", "servidor");
            obj.put("disponibilidad", disponibilidad);
        } catch (Exception ex) {
            System.err.println("Error en " + Servidor.class.getName() + ": " + ex);
            obj.put("error", "REQUEST IS BAD");
        }
        
        return obj.toString();
    }
    
}
