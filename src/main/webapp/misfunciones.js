function traerInformacion(){
    $.ajax({
        url:"https://g792ddec211d302-ubqaneatdpd43yh2.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/pruebarest/pruebacostume/",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
			pintarrespuesta(respuesta.items);
			
        }
    });
}

function pintarrespuesta(items){
	let mitabla="<table>";
	for(i=0;i<items.length;i++){
		mitabla+="<tr>";
		mitabla+="<td>"+items[i].idcostume1+"</td>";
		mitabla+="<td>"+items[i].name1+"</td>";
		mitabla+="<td>"+items[i].year1+"</td>";
		mitabla+="</tr>"
	}
	mitabla+="</table>";
	$("#resultado").append(mitabla);
}


