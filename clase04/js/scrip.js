
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
var x ;
console.log(typeof x);