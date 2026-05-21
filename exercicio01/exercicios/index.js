let valorCompra = 700;      // valor original da compra (em reais)
let formaPagamento = "boleto"; // "dinheiro" ou "cartao"  
let cliente ="vip"    


// --------------------
// Variáveis que vamos usar
// --------------------
let porcentagemDesconto = 0; // guardará o desconto total em forma decimal (ex: 0.20 = 20%)
let valorFinal = 0;
         // valor que o cliente pagará depois dos descontos

// --------------------
// 1) desconto base por faixa de valor
// --------------------
if (valorCompra>=1000){
  porcentagemDesconto=0.12;
}
else if (valorCompra>=500 <=1000){
  porcentagemDesconto=0.08;
}
else if(valorCompra<500){
  porcentagemDesconto=0.03;
}
 // 12% se maior que 30 litro


// --------------------
// 2) bônus de cupom (se tiver)
// --------------------
if (cliente === "empresarial") {
  porcentagemDesconto += 0.06 ;
  
}
else if (cliente === "novo") 
    porcentagemDesconto += 0.01 ;


else if(cliente==="vip"){
  porcentagemDesconto+=0.03;
}

    if (formaPagamento === "pix") {
 porcentagemDesconto += 0.02;
  
  }

  else if(formaPagamento==="boleto"){
    porcentagemDesconto+=0.03;
  }

  else if (porcentagemDesconto>0.020){
    porcentagemDesconto+=0.020
  }
// --------------------
// 3) cálculo final
// --------------------
valorFinal = valorCompra * (1 - porcentagemDesconto); // aplica o desconto sobre o valor


// --------------------
// 4) saídas pedidas
// --------------------
console.log("Valor da compra: R$" + valorCompra.toFixed(2));
console.log("cliente ? " + cliente  );
console.log("forma de pagamento:" +formaPagamento )
console.log("desconto total: " + (porcentagemDesconto * 100).toFixed(0) + "%");
console.log("Você economizou: R$" + (valorCompra - valorFinal).toFixed(2));
console.log("Valor final a pagar: R$" + valorFinal.toFixed(2));

// --------------------
// 5) mensagem "boa compra" (personalizada)
// --------------------
if (porcentagemDesconto >= 0.15) {
  console.log("Excelente economia 🏆");
} else if (porcentagemDesconto >= 0.05) {
  console.log("Boa economia 👍");
} else {
  console.log("vote sempre! 😊");
}
