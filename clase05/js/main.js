$(document).ready(function(){
 validar();
});
var user ="";
function validar(){
    user = sessionStorage.getItem("user");
    if(user==null){
        alert("usuario no autentificado");
        window.location = "index.html";
    }
}

$(".dropdown-trigger").dropdown();
user = sessionStorage.getItem("user");
$("#user").html(user);
$("#salir").click(function (e) { 
    e.preventDefault();
    sessionStorage.removeItem("user");
    window.location = "index.html";
});
function opciones(op){
    alert(op);
    if(op==1){
        $("#contenido").load("operaciones.html");
    }
}
function raiz(){
    var n = parseInt($("#num").val());
    $("#res").val(Math.sqrt(n));
}
