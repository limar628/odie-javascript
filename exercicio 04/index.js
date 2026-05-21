let nota = 9;
resultado="";



 
if (nota>=5 && nota<=6.9){
resultado="recuperacao";
}

else if (nota <5){
    resultado = "reprovado";
}

else if(nota >=7){
    resultado= "aprovado"
}

console.log("nota:"+nota)
console.log("resultado:"+resultado)



let compras = 200;

let desconto=0;
let valorFinal=0;


if(compras>=1000){
    desconto=0.15
}
else if (compras >=500 && compras<=999){
    desconto=0.10

}
else if (compras>=200 && compras <=499){
    desconto=0.05;

}
valorFinal=compras*(1-desconto) 


console.log("valor compra:" +compras.toFixed(0));
console.log("desconto:"+(desconto*100)+"%");
console.log("valor final:"+valorFinal.toFixed(2));


let numero = 12;
let resultadoT=""

if (numero >10){
    resultadoT="maior";

}
else if (numero <=10){
    resultadoT="menor"
}

console.log ("numero:"+numero)
console.log("resultado:"+resultadoT)

//versao melhorada ternaria

let numero1 = 12;

let resultadoV = numero > 10 ? "maior" : "menor";

console.log("numero: " + numero1);
console.log("resultado: " + resultadoV);
