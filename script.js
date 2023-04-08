
/*valida datos requeridos*/

function valido(){
    let nombre = document.querySelector("#name").value;
    let apellido=document.querySelector("#apellido").value;
    let email = document.querySelector("#email").value;
    let pais = document.querySelector("#pais").value;
    let region = document.querySelector("#region").value;

    if (nombre=="" ) {alert('Falta nombre')}
        else{ 
    if (apellido=="" ) {alert('Falta apellido')}
        else{ 
    if (email=="" ) {alert('Falta email')}
        else{
    if (pais=="" ) {alert('Falta pais')}
        else{
    if (region=="" ) {alert('Falta region')}
        else{alert('Descuento 60% concedido, le llegará mail de confirmación')
        /* y se refresca la pagina */
        location.reload()
}    
}
}
}
}
}