
    

    const idade = 20; 
    if ( idade < 18) {console.log ("menor de idade");}
    else {console.log ("maior de idade");}
// Verifica se a idade é menor ou maior que 18 anos e imprime a mensagem correspondente
if(idade >=18 && idade <=25) {console.log ("adulto jovem");}
else if (idade >=26 && idade <=59) {console.log ("fase adulta");}
else {console.log ("terceira idade");}


let nota =8;
if (nota >=7) {console.log ("aprovado");}
else {console.log ("reprovado");}
// Verifica a faixa etária e imprime a mensagem correspondente
if( nota>=5 && nota <=6.9) {console.log ("recuperação");}
else if (nota >=0 && nota <=4.9) {console.log ("reprovado");}


let usuario= "keli";
let senha= "1234";
let usuarioDigitado ="kelo";
let senhaDigitada ="1238";

if (usuarioDigitado == usuario && senhaDigitada == senha) {console.log ("acesso permitido");}


else if (usuarioDigitado !=="keli" && senhaDigitada !=="1234") {console.log ("acesso bloqueado");
    
} else {
    console.log ("acesso incorreto");
}



let anos = 22 ;
if (anos >=0 && anos <=17) {console.log ("menor de idade");}

else if (anos >=18 && anos <=25) {console.log ("adulto jovem");}
else if (anos >=26 && anos <=34) {console.log ("fase adulta");}
else if (anos >=35 && anos <=49) {console.log ("meia idade");}
else if (anos >=50 && anos <=59) {console.log ("idade madura");}
else  {console.log ("terceira idade");}

if (anos %2==0) {console.log ("idade par");}
else {console.log ("idade impar");}


let temperatura= 35;
if (temperatura < 10)
    {console.log ("muito frio");}
else if(temperatura >=10 && temperatura <=20) 
    {console.log ("frio");}
else if ( temperatura >=21 && temperatura <=29) 
    {console.log("agradavel");}
else if (temperatura >=30 && temperatura <=39 )
     {console.log("quente");}
else if (temperatura >=40) 
    {console.log("extremo");}

if(temperatura >0) console .log ("temperatura confortavel para exercicio");


let valorCompra= 300;
let valorFinal= valorCompra
let cupom= "desconto10";
let valorTotal= valorCompra;

;
if (valorCompra >=500)
    {valorFinal= valorCompra * 0.80;
console.log ("desconto de 20% aplicado: " + valorFinal );
}
else if (valorCompra >=200 ) {valorFinal= valorCompra * 0.90;
console.log ("desconto de 10% aplicado: " + valorFinal )
}
else if (valorCompra >100 ) {valorFinal= valorCompra * 0.95;
console.log ("desconto de 5% aplicado: " + valorFinal );
}
else {valorFinal= valorCompra;
console.log ("nenhum desconto aplicado: " + valorFinal );

}
if (cupom == "desconto10"){
    valorFinal= valorFinal * 0.90;



    console.log ("cupom de desconto aplicado. valor final: " + valorFinal );
}

else if( valorTotal< valorCompra) {
    console.log (" valor da compra: " + valorCompra );
}


