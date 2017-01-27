package webservices;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import org.json.JSONException;
import org.json.JSONObject;
import recurso.Global;

/**
 *
 * @author Jose Castro
 * @author Jose Alvarez
 */
@Path("/servidor/disponibilidad/{fecha}")
public class Servidor {

    /*
    Ruta de prueba:
    localhost:8080/servidor/disponibilidad/01-2016
     */
    Global gb = new Global();

    @GET
    @Produces("application/json")
    public String disponibilidad(@PathParam("fecha") String fecha) {
        JSONObject obj = new JSONObject();

        try {
            double disponibilidad = Math.random() * 1;
            String[] fechas = fecha.split("-");
            System.out.println("Mes = " + fechas[0]);
            System.out.println("Año = " + fechas[1]);

            if (gb.valido(fechas[0], fechas[1])) {

                SimpleDateFormat formatter = new SimpleDateFormat("MM-yyyy");
                Date miFecha = formatter.parse(fecha);

                DateFormat dateFormat = new SimpleDateFormat("MM-yyyy");
                Date fechaActual = new Date();

                if (miFecha.compareTo(fechaActual) <= 0) {
                    obj.put("nombre", "servidor");
                    obj.put("disponibilidad", disponibilidad);

                } else {
                    obj.put("error", "REQUEST IS BAD");
                }

            } else {
                obj.put("error", "REQUEST IS BAD");
            }

        } catch (ParseException | JSONException ex) {
            System.err.println("Error en " + Servidor.class.getName() + ": " + ex);
            obj.put("error", "REQUEST IS BAD");
        }
        
        System.out.println("obj = " + obj);
        return obj.toString();
    }

}
