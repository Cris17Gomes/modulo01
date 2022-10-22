const input = "cAPS lOCK"

let primeiraLetra = input[0];
let restante = input.slice(1);
let frase = "";
if (primeiraLetra.toLowerCase() && restante.toUpperCase()) {
       frase += primeiraLetra.toUpperCase() + restante.toLowerCase();
        return console.log(frase)
}else if (input === input.toUpperCase()){
     frase += primeiraLetra.toLowerCase() + restante.toLowerCase();
      return console.log(frase)
}else {
    
    console.log(input)
}