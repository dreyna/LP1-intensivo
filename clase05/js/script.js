const email = "davidreyna@gmail.com";
const clave = "1234567";
$("#boton").click(function (e) { 
    e.preventDefault();
    var correo = $("#email").val();
    var pass = $("#password").val();
    if(email == correo && clave == pass){
        sessionStorage.setItem("user", correo);
        window.location = "main.html";
    }else{
        window.location = "index.html";
    }
    
});
