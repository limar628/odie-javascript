function parOuImpar(numero) {
     if (numero % 2 ===0){
        return "par";
     }else{
        return "impar";
     }

}

console.log(parOuImpar(12)); // par
console.log(parOuImpar(7));  // impar

 //EXERCICIO02
 let nota= 6.7;

 let resultadoNota =0;
 if (nota >=7){
    resultadoNota="aprovado";
 }
 else if (nota >=5 && nota <7){
    resultadoNota="recuperacao";
 }
 else {
    resultadoNota="reprovado";
 }
 console.log ("nota:"+nota.toString());
   console.log("resultado:"+resultadoNota.toString());

   //EXERCICIO 03

   let resultadoNumero="";
   let multiploDe3 =0;

   for (let i= 1; i <= 20; i++){
     if ( i % 3 ===0){
    resultadoNumero= resultadoNumero === "" ? i.toString() : resultadoNumero + ", " + i.toString();
    
        multiploDe3 ++;
    }
   }
    console.log("numeros de 1 a 20:"+resultadoNumero.toString());


    console.log("multiploDe3:"+multiploDe3.toString());
     
    let palavra = "javascript";

    for ( let j =0; j < palavra.length; j++){
        console.log("letra "+ j +": "+ palavra[j]);
    }

    for (let i =1; i <=10; i++){
        console.log ("numeros "+ i+":");
    }
    let numero = 6;

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}
let numero1=0;
 for (let i = 0; i <=20;i++){
if (i % 2 === 0){
numero1=i++
}

}
console.log("numeros pares"+numero1)


let numero2=0;
let resultado1="";
 for (let i = 0; i <=20;i++){
    if (i % 2===0){
resultado1 =resultado1 ===""?i:resultado1+","+i;

numero2++;


}

}
console.log("numeros pares"+resultado1)
console.log("resultado:"+numero2)


let resultado = "";
let totalPares = 0;

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    resultado = resultado === "" ? i : resultado + ", " + i;
    totalPares++;
  }
}

console.log("pares:", resultado);
console.log("total de pares:", totalPares);

 let soma ="";
let quantidade=0;
let quantidadeImpares=0;

for (let i=0; i <=50; i++){
  if(i % 2 ===0){
   soma=soma ===""? i : soma + "," + i;
      quantidade++;
  }

if(i % 2 ===1){
      quantidadeImpares++;

  }
}




console.log("números pares: "+soma);
console.log("quantidade de números pares: "+quantidade);
console.log("quantidade de números ímpares: "+quantidadeImpares);

let somaPares ="";
let somaTotal=0;
let somaImpares=0;

for(let i =0; i <=100; i++){
   if (i % 2 ===1){
      somaPares=somaPares ===""? i : somaPares + "," + i;
      somaTotal++;
      somaImpares=somaImpares+i;

   }
}


console.log("números ímpares: "+somaPares);
console.log("quantidade de números ímpares: "+somaTotal);
console.log("soma dos numeros: "+somaImpares);



let numeros ="";
let quantidade1=0;
let soma1=0;

   for (let i =1; i<=50; i++){
   if ( i % 3 ===0 && i % 5 ===0){
     numeros = numeros === "" ? i : numeros + ", " + i;
      quantidade1++;
      soma1 =soma1 + i;

   }
} 
   
  console.log ("numeros:"+ numeros)
 console .log ("numeros impares:"+ quantidade1);
console.log ("soma:" + soma1);


 
   




let lista = "";
let quantidade2 = 0;
let soma2 = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    lista = lista === "" ? i : lista + ", " + i;
    quantidade2++;
    soma2 += i;
  }
}

console.log("números: " + lista);
console.log("quantidade: " + quantidade2);
console.log("soma: " + soma2);


let lista1= "";
  let quantiddade= 0;
  let soma4=0;

for(let i = 1; i<=200; i++){
 if ( i % 2 ===0 || i %7 ===0){
  lista1= lista1 ===""? i : lista1 + "," + i;
  quantiddade++;
  soma4= soma4 + i;
 }


}
 
 console.log("lista:"+ lista1);
 console.log("quantidades:" +quantidade);
 console.log("soma:" +soma)



// EXERCICIO 03

let numeros1 = "";
let quant = 0;
let soma5 = 0;

let listaImpares = "";
let listaPares = "";

for (let i = 1; i <= 50; i++) {

  // Separar pares e ímpares
  if (i % 2 === 0) {
    // PAR
    if (listaPares === "") {
      listaPares = i;
    } else {
      listaPares = listaPares + "," + i;
    }
  } else {
    // ÍMPAR
    if (listaImpares === "") {
      listaImpares = i;
    } else {
      listaImpares = listaImpares + "," + i;
    }
  }

  // Lista geral
  if (numeros1 === "") {
    numeros1 = i;
  } else {
    numeros1 = numeros1 + "," + i;
  }

  quant++;
  soma5 += i;
}

console.log("Todos os números: " + numeros1);
console.log("Quantidade total: " + quant);
console.log("Soma total: " + soma5);
console.log("Lista de pares: " + listaPares);
console.log("Lista de ímpares: " + listaImpares);
