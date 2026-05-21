let numero =7;
let resultado="";

if (numero %2 ===0){
    resultado="par";
}
else {
    resultado= "impar";
}

console.log("numero:"+numero);
console.log("resultado:"+resultado);

let idade= 15;

let legivel= idade > 16 ?
"sim":"nao";

console.log("idade:" +idade)
console.log("legivel:"+legivel)


let numeroP= 8;
let resultadoP= "";

if(numeroP>0){
    resultadoP="positivo";
}
else if(numeroP<0){
    resultadoP="negativo";

}
else{
    resultadoP= "zero";
}

console.log("numero:"+numeroP);
console.log("resultado:"+resultadoP);

let compra =300;
let desconto=0;
let valorfinal=0;

if (compra > 100){
    desconto=0.10
}else{
desconto= 0.0;
}

valorfinal=compra *(1-desconto);

console.log("compra:"+compra);
console.log("desconto:"+(desconto*100)+"%");
console.log("valorfinal:"+valorfinal)

let demaior=13;
let demenor= demaior >=18?
"maiorIdade":"menorIdade";

console.log("idade:"+demaior)
console.log("resultado:"+demenor)

let numero1= 25;
let rest="";

if ( numero1 % 5 ===0){
    rest="multiplo";
}else{
    rest="nao e multiplo";
}
 console.log("numero:"+numero1)
 console.log("multiplo de 5:"+rest)
 
 let nota =9;
 let valor= "";

 if (nota >=7){
    valor="aprovado"
 }
 else if (nota >5 && nota <7){
    valor= "recuperacao"
 }
 else{
    valor ="reprovado"
 }

 console.log( "nota:"+ nota)
 console.log("resultado nota :"+valor)