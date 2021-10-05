$(document).ready(function () {
    //configura el aspecto inicial de la pagina
    estadoInicial();
    //ejecuta función para enviar petición al ws
    listar();
});

function listar() {
    $.ajax({
        // la URL para la petición (url: "url al recurso o endpoint")
        url: "https://gf7c124a9e6c768-db202109231826.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/bike/bike",

        // especifica el tipo de petición http: POST, GET, PUT, DELETE
        type: 'GET',

        // el tipo de información que se espera de respuesta
        dataType: 'json',

        // código a ejecutar si la petición es satisfactoria;
        success: function (respuesta) {

            //recibe el arreglo 'items' de la respuesta a la petición
            listarRespuesta(respuesta.items);
        },

        // código a ejecutar si la petición falla;
        error: function (xhr, status) {
            $("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete: function (xhr, status) {
            $("#mensajes").html("Obteniendo listado de bicis...");
            $("#mensajes").hide(1000);
        }
    });
}

function listarRespuesta(items) {
    $("#listado").html("");
    $("#listado").show(500);
    //define variable javascript con la definicion inicial de la tabla, la primera fila y los
    //encabezados o títulos de la tabla
    var tabla = `<table border="1">
                  <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Categoria</th>
                    <th>Nombre</th>
                    <th colspan="2">Acciones</th>
                  </tr>`;
                  
    //recorre el arreglo de 'items' y construye dinamicamente la fila de datos de la tabla
    for (var i=0; i < items.length; i++) {
        tabla +=`<tr>
                   <td>${items[i].brand}</td>
                   <td>${items[i].model}</td>
                   <td>${items[i].category_id}</td>
                   <td>${items[i].name}</td>
                   <td><button class="botonesLista" onclick="editarRegistro(${items[i].id})">Editar</button></td>
                   <td><button class="botonesLista" onclick="borrarRegistro(${items[i].id})">Borrar</button></td>
                   </tr>`;
    }

    //cierra tabla agregando el tag adecuado
    tabla +=`</table>`;

    //accede al elemento con id 'listado' y adiciona la tabla de datos a su html
    $("#listado").html(tabla);
}

function estadoInicial(){
    $("#nuevo").hide();
    $("#editar").hide();
    $("#listado").show(500);
    $("#nuevoRegistro").show(500)

    //limpia el contenido de los campos del formulario nuevo
    $("#id").val("")
    $("#brand").val("")
    $("#model").val("")
    $("#category").val("")
}