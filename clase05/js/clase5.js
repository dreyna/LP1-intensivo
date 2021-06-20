var x = 10;
let w = 11;
const pi = 3.14;

var i = 1;
while(i<=10){
    document.write(i+"\t");
    i++;
}

for(var y =1;y<=10;y++){
    document.write(y+"\n");
}
var op = 1;
switch(op){
    case 1:document.write("Switch: "+op);break;
    case 2:document.write("Switch: ");break;
    case 3:document.write("Switch: ");break;
}
//funciones
function nombre1(a,b){
    return a+b;
}
alert(nombre1(4,5));
//arreglos
var lista = new Array(3);
lista[0] = "jose";
lista[1] = "Carlos";
lista[2] = "Ana";
for(var j =0;j<3;j++){
    document.write("posición = "+j+" Nombre= "+lista[0]+" --- ");
}
//Objetos

function Alumno(nombre, codigo, sexo, telefono){
    this.nombre = nombre;
    this.codigo = codigo;
    this.sexo = sexo;
    this.telefono = telefono;
}
class Persona{
    constructor(nombre, codigo, sexo, telefono){
        this.nombre = nombre;
        this.codigo = codigo;
        this.sexo = sexo;
        this.telefono = telefono;
    }s
}
var per = new Array(Persona);
 persons.push()