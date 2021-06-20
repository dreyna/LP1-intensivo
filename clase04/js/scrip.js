
function cambiarColor(){
var texto = document.getElementById("texto");
texto.style.background="blue";
}
function calcular(){
    var n = document.getElementById("numero");
    var r = document.getElementById("resultado");
    if(n.value == isNaN){
        r.value =0;
    }else{
        console.log(n);
        r.value = Math.sqrt(n.value);
    }    
}
//agregar un texto

function add(){
    var n = document.getElementById("texto");
    var r = document.getElementById("resultado"); 
    r.innerHTML = "<h1>"+n.value+"</h1>"; 
}
var res = 0;
function operacion(){    
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var op = document.getElementById("operacion").value;  
    switch(op){        
        case '1': res = parseInt(n1.value) + parseInt(n2.value);
                document.getElementById("resultado").innerHTML=res;
                break;
        case '2':
                res = parseInt(n1.value) - parseInt(n2.value);
                document.getElementById("resultado").innerHTML=res;
                break;
        case '3':
                res = parseInt(n1.value) * parseInt(n2.value);
                document.getElementById("resultado").innerHTML=res;
                break;
        case '4':
                res = parseFloat(n1.value) / parseFloat(n2.value);
                document.getElementById("resultado").innerHTML=res;
                break;
    }

}
function agregar(){
    let nom = document.getElementById("nombres").value;
    let correo = document.getElementById("correo").value;
    let ep = document.getElementById("escuela");
    let escuela = ep.options[ep.selectedIndex].text;
    let tel = document.getElementById("telefono").value;
    let fec = document.getElementById("fecnac").value;
    
    document.getElementById("resultado").innerHTML=
    "<ul><li>"+nom+"</li><li>"+
    correo+"</li><li>"+escuela+"</li><li>"+
    tel+"</li><li>"+fec+"</li></ul>";
    let nom2 = document.querySelector("#nombres"); 
    console.log(nom2.value);
}