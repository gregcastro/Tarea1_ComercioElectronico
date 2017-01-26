
// $.when( fun() ).done( function() {

// 	alert("culo");

// } );


// $.when( $.ajax( "/page1.php" ), $.ajax( "/page2.php" ) ).done(function( a1, a2 ) {
//   // a1 and a2 are arguments resolved for the page1 and page2 ajax requests, respectively.
//   // Each argument is an array with the following structure: [ data, statusText, jqXHR ]
//   var data = a1[ 0 ] + a2[ 0 ]; // a1[ 0 ] = "Whip", a2[ 0 ] = " It"
//   if ( /Whip It/.test( data ) ) {
//     alert( "We got what we came for!" );
//   }
// });

var res = 1;
var componentes_faltantes;

$(document).ajaxStop(function() {
  console.log("res = " + res);

	$('#disponibilidad').text("La disponibilidad es: " + res);
	var componentes = "";
	var N = componentes_faltantes.length;
	for (var i = 0; i < N ; i++) {
		
		if (i == N-1) {
			componentes += componentes_faltantes[i];
		} else {
			componentes += componentes_faltantes[i] + ", ";
		}

		
	}
	if (N > 0) {
		$('#excluido').text("Se excluyeron los siguientes componentes, debido a que no dieron respuesta: " + componentes);
	}




});

function fun() {
	componentes_faltantes = []
	var disp_servidor = -1, disp_smbd = -1, disp_aplicacion = -1, disp_internet = -1, disp_router = -1;
	

	if (Math.random() <= 0.8 ) {

		$.ajax({
			type:"GET" ,
		    url: 'http://127.0.0.1:8080/servidor/disponibilidad/01-2016',
		    dataType: "json",
			error: function (xhr, ajaxOptions, thrownError) {
		        console.log("Status: " + xhr.status);
		    	console.log("thrownError: " + thrownError);
		        console.log("ajaxOptions: " + ajaxOptions);
		               
		        },
		    success: function(msg){
	          	disp_servidor = msg.disponibilidad;
		        res *= disp_servidor;
		        console.log("res servidor = " + res);
		        // console.log(msg);
		    }

	   });
	} else {
		componentes_faltantes.push('servidor');
	}

	if (Math.random() <= 0.8 ) {

		$.ajax({
			type:"GET" ,
		    url: 'http://127.0.0.1:8080/router/disponibilidad/01-2016',
		    dataType: "json",
			error: function (xhr, ajaxOptions, thrownError) {
		        console.log("Status: " + xhr.status);
		    	console.log("thrownError: " + thrownError);
		        console.log("ajaxOptions: " + ajaxOptions);
		               
		        },
		    success: function(msg){
	          	disp_router = msg.disponibilidad;
	          	res *= disp_router;
        		console.log("res router = " + res);
		        // console.log(msg);
		    }

	   });
	} else {
		componentes_faltantes.push('router');
	}

	if (Math.random() <= 0.8 ) {

		$.ajax({
			type:"GET" ,
		    url: 'http://127.0.0.1:8080/smbd/disponibilidad/01-2016',
		    dataType: "json",
			error: function (xhr, ajaxOptions, thrownError) {
		        console.log("Status: " + xhr.status);
		    	console.log("thrownError: " + thrownError);
		        console.log("ajaxOptions: " + ajaxOptions);
		               
		        },
		    success: function(msg){
	          	disp_smbd = msg.disponibilidad;
	          	res *= disp_smbd;
        		console.log("res smbd = " + res);
		        // console.log(msg);
		    }

	   });
	} else {
		componentes_faltantes.push('smbd');
	}

	if (Math.random() <= 0.8 ) {

		$.ajax({
			type:"GET" ,
		    url: 'http://127.0.0.1:8080/aplicacion/disponibilidad/01-2016',
		    dataType: "json",
			error: function (xhr, ajaxOptions, thrownError) {
		        console.log("Status: " + xhr.status);
		    	console.log("thrownError: " + thrownError);
		        console.log("ajaxOptions: " + ajaxOptions);
		               
		        },
		    success: function(msg){
	          	disp_aplicacion = msg.disponibilidad;
         	 	res *= disp_aplicacion;
		        console.log("res aplicacion = " + res);
		        // console.log(msg);
		    }

	   });
	} else {
		componentes_faltantes.push('aplicacion');
	}

	if (Math.random() <= 0.8 ) {

		$.ajax({
			type:"GET" ,
		    url: 'http://127.0.0.1:8080/internet/disponibilidad/01-2016',
		    dataType: "json",
			error: function (xhr, ajaxOptions, thrownError) {
		        console.log("Status: " + xhr.status);
		    	console.log("thrownError: " + thrownError);
		        console.log("ajaxOptions: " + ajaxOptions);
		               
		        },
		    success: function(msg){
	          	disp_internet = msg.disponibilidad;
	          	res *= disp_internet;
		        console.log("res internet = " + res);
		        // console.log(msg);
		    }

	   });
	} else {
		componentes_faltantes.push('internet');
	}





}
