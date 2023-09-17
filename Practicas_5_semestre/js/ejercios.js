//Funcion para saludar
function saludar(){
var valor1=prompt("Ingresa tu nombre ");
alert("Hola "+ valor1);
}

//funcion para sumar sos numeros
function sumar(){
var numero1 = prompt("Ingresa tu primer numero");
var valor1_2=Number.isInteger(numero1);
var numero2= prompt("Ingresa tu segundo numero");
var valor1_1=Number.isInteger(numero2);
var valor_final= valor1_1 + valor1_2;
document.write("tu resultado es "+ valor_final);
alert("El resultado de tu suma es " + valor_final);

}