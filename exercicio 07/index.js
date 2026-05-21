//exercicio 01
let num1= 10;
let resltado="";

if(num1 %2 ===0){
    resultado="par";
}
else{
    resultado="impar";
}


console.log("numero:"+num1);
console.log("resultado:"+resultado);

//exercicio 02
let idade=18;
let resultadoV="";

if (idade >=18){
    resultadoV="pode dirigir";
}
else{
    resultadoV="não pode dirigir";
}

console.log("idade:"+idade);
console.log ("resultado:"+resultadoV);
//exercicio 03
let compra= 200;
let desconto=0;
let valorfinal=0;

if ( compra >=200){
    desconto=0.10;
}
else{desconto=0.00;};

valorfinal=compra*(1-desconto);

console.log("compra:"+compra);
console.log("desconto:"+(desconto*100)+"%");
console.log("valor final:"+valorfinal);

//exercicio 04

let temperatura= 18;
let resultadoT="";

if (temperatura <15){
    resultadoT="frio";
}
else if (temperatura>=15 && temperatura<25){
    resultadoT="agradavel";
}
else{
    resultadoT="quente";
}

console.log("temperatura:"+temperatura);
console.log("resultado:"+resultadoT);

//EXERCICO 05

let nota =8.7;
let conceito="";
if ( nota>7.0){
    conceito="Aprovado";

}
else if (nota >=5.0 && nota <=6.9){
    conceito="Recuperação";
}
else{
    conceito="Reprovado";
}

console.log("nota:"+nota);
console.log("conceito:"+conceito);
//exercico 06

let numero = -9;
let res = "";

if(numero >0){
    res="positivo";

}
else if(numero<0){
    res ="negativo";
}
else{
    res="zero"
}

// faça o if aqui

console.log("numero: " + numero);
console.log("resultado: " + res);

//exercicio 07
let numero2 = 15;
let resultado1 = "";

if (numero2 >= 10){
    resultado1 ="maior que 10"
}
else{
    resultado1 ="  menor que 10"
}

// faça o if aqui

console.log("numero: " + numero2);
console.log("resultado: " + resultado1);


//exercicio 08
let numero3 =8;
let num="";

    if (numero3 > 0){
        num="positivo";
    }
    else if (numero3 < 0){
        num="negativo";
    }
    else{
        num="zero";
    }

    console.log("numero: " + numero3);
    console.log("resultado:"+num)




let listaPares = "";
let listaImpares = "";
let listaMultiplos = "";
let soma = 0;
let quantidade = 0;

for (let i = 1; i <= 80; i++) {

  // condição principal: par E múltiplo de 5
  if (i % 2 === 0 && i % 5 === 0) {

    // lista de pares
    if (listaPares === "") {
      listaPares = i;
    } else {
      listaPares = listaPares + "," + i;
    }

    // lista de múltiplos
    if (listaMultiplos === "") {
      listaMultiplos = i;
    } else {
      listaMultiplos = listaMultiplos + "," + i;
    }

    quantidade++;
    soma += i;
  }

  // lista de ímpares (independente da condição acima)
  if (i % 2 === 1) {
    if (listaImpares === "") {
      listaImpares = i;
    } else {
      listaImpares = listaImpares + "," + i;
    }
  }
}

console.log("Lista pares e múltiplos de 5:", listaPares);
console.log("Lista ímpares:", listaImpares);
console.log("Lista múltiplos:", listaMultiplos);
console.log("Quantidade:", quantidade);
console.log("Soma:", soma);



let listaPares1 = "";
let listaImpares1 = "";
let quantidadePares = 0;
let somaImpares = 0;

for (let i = 1; i <= 60; i++) {

  if (i % 2 === 0) {
    // PAR
    if (listaPares1 === "") {
      listaPares1 = i;
    } else {
      listaPares1 = listaPares1 + "," + i;
    }
    quantidadePares++;

  } else {
    // ÍMPAR
    if (listaImpares1 === "") {
      listaImpares1 = i;
    } else {
      listaImpares1 = listaImpares1 + "," + i;
    }
    somaImpares += i;
  }
}

console.log("Lista pares:", listaPares1);
console.log("Lista ímpares:", listaImpares);
console.log("Quantidade de pares:", quantidadePares);
console.log("Soma dos ímpares:", somaImpares);


