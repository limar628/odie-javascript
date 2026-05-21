




 // --------------------
// Dados de entrada
// --------------------
let valorCompra = 120;      // valor original da compra (em reais)
let formaPagamento = "cartaoPosto"; // "dinheiro" ou "cartao"      


// --------------------
// Variáveis que vamos usar
// --------------------
let porcentagemDesconto = 0; // guardará o desconto total em forma decimal (ex: 0.20 = 20%)
let valorFinal = 0;         // valor que o cliente pagará depois dos descontos

// --------------------
// 1) desconto base por faixa de valor
// --------------------
if (valorCompra > 500) {
  porcentagemDesconto = 0.15;   // 20% se maior que R$500
} else if (valorCompra > 300) {
  porcentagemDesconto = 0.08;   // 15% se entre 301 e 500
} else if (valorCompra > 100) {
  porcentagemDesconto = 0.05;   // 5% se entre 101 e 300
} else {
  porcentagemDesconto = 0;      // 0% se até R$100
}

// --------------------
// 2) bônus de cupom (se tiver)
// --------------------
if (formaPagamento === "pix") {
  porcentagemDesconto += 0.02 ;
 } else if (formaPagamento === "cartaoPosto") {
    porcentagemDesconto += 0.03 ;
}

// --------------------
// 3) cálculo final
// --------------------
valorFinal = valorCompra * (1 - porcentagemDesconto); // aplica o desconto sobre o valor

// --------------------
// 4) saídas pedidas
// --------------------
console.log("Valor da compra: R$" + valorCompra.toFixed(2));
console.log("forma de pagamento ? " + formaPagamento  );
console.log("Desconto total: " + (porcentagemDesconto * 100).toFixed(0) + "%");
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
