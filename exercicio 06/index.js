let idade=22;
let resultado=idade>16?
"pode votar": "nao pode votar";


console .log ("idade:"+idade);
console.log("resultado:"+resultado);

let numero =30;
let multiplo=""

if(numero % 3 ===0){
    multiplo="multiplo de tres";
}else{
    multiplo="não e multiplo de tres";
}
 console.log ("numero:"+numero);
 console.log("resultado:" + multiplo)

 let compra= 150;
 let desconto=0;
 let valorfinal=0;


 if(compra >=150){
    desconto=0.05;
 }else{
desconto=0.00;
 }

 valorfinal=compra*(1 -desconto)

console.log("compra:"+compra);
console.log ("desconto:"+(desconto*100)+"%");
console.log("valor final:"+valorfinal);

let temperatura =26;
let resultadoP="";

if(temperatura < 15){
    resultadoP="frio";
}
else if (temperatura>15 && temperatura<25){
    resultadoP="agradavel";
}
else {
    resultadoP="quente";
}

console.log("temperatura:"+temperatura);
console.log("resultado:"+resultadoP)