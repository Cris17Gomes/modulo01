//const precos = [200, 150, 50, 100];
const precos = [100, 100, 100];
let menorValor = precos[0];
let valorDesconto = 0;
let soma = 0;
let valorTotalApagar = 0;
 
//Menor valor
  
for (let item of precos){
 if(item < menorValor){
     menorValor = item; 
   }
}
 
//soma dos valores
for (let i = 0; i < precos.length; i++) {
    soma = soma + precos[i];
}
 //comparar promocao
 if (precos.length <= 2){
     valorTotalApagar = soma;
}
 //comparar promocao com desconto
if (precos.length >= 3) {
     valorDesconto  +=  (menorValor / 100) * 50;
     valorTotalApagar += soma - valorDesconto;
}
console.log(valorTotalApagar); 