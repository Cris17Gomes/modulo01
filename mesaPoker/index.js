//const valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const valores = [ 0, 5, 6, 10, 11 ]
let min = 1;
let max = 10;
let jogadorQuePodeJogar = [];
for (let i = 0; i < valores.length; i++) {
    if (i > max){
        max = i;
     }
     if(i < min){
      min = i;
     }
        
    if (valores[i] >= min || valores[i] <= max) {
        jogadorQuePodeJogar.push(valores[i]);
    } 
}

 console.log(jogadorQuePodeJogar);