var dist = null; 
let  transporte = "Se recomienda el siguiente metodo de transporte: ";
while(dist!="Error"){
dist = prompt("Ingresar Distancia");
if (dist > -1 && dist < 1001)
    alert(transporte + "pie");
else if (dist > 1000 && dist < 10001)
alert(transporte +"Bicicleta");
else if (dist > 10000 && dist < 30001)
alert(transporte + "Colectivo");
else if (dist > 30000 && dist < 100001)
alert(transporte + "Auto");
else if (dist > 100000) alert(transporte + "Avion");
else{
    alert("Error");
    dist = "Error";
} 
}

