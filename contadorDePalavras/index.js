const texto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer"
let  resultado = texto.trim().split(" ");
let totalPalavra =0;
for(let i = 0; i < resultado.length; i++){
    if (resultado[i] != ""){
        totalPalavra++;
    }
}            
console.log(`${totalPalavra}`);