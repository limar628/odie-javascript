let peso =130;
let altura= 1.60;
let idade= 37;
let imc=0;
let medidas="";
imc=peso/(altura*altura)


if (idade<18){
medidas="juvenil";
}
  else if (imc<18,5);{
medidas= "baixo";
}
 if(imc>=18.5 && imc<= 24.9);{
 medidas= "ideal";
  }
  if (imc>=25 && imc <120){
    medidas="acima";
}
else if (peso>120){
    medidas="extra";
}

 console.log("peso:"+peso);
 console.log("altura:"+ altura);
 console.log("idade:"+idade);
 console.log("medidas:"+medidas);
 console.log("imc:"+ imc.toFixed(2));

let numero = 0
;
let resultado ="";

if (numero >0  ){
    resultado="positivo"; 
}
else if (numero <0){
resultado= "negativo";
}
else {
    resultado = "zero";
}
    
console.log("numero:"+numero);
console.log("resultado:"+ resultado)

let idadeI= 15;
let statos="";

if (idadeI>18)
    statos="maior";

else {
    statos="menor";

}
console.log("idade:"+idadeI)
console.log("classificaçao:"+statos)

let valorCompra =300;
let valorFinal="";
let descontao= "";

if (valorCompra >=500){
 descontao= 0.10;
}
else if (valorCompra>=200){
    descontao=0.05;
}

if(valorCompra<=199){
    descontao=0.00;

}

valorFinal=valorCompra*(1-descontao);

console.log("valorCompra:"+valorCompra);
console.log("desconto:"+(descontao*100)+"%")
console.log("valorfinal:"+ valorFinal)