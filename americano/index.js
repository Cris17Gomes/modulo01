const numeros = [1, 3, 2, 1]
let soma = 0;
let contador = 0;

//Soma
for(let i = 0; i < numeros.length; i++) {
     soma += numeros[i];    
  }     
   //comparar se a soma maior numeros
for(let i = 0; i < soma; i++){
       contador++;
       
if (contador > numeros.length){
     contador = 1;
}        
}
  console.log(contador);