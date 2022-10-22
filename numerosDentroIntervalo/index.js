const numero = [10, 5, 20]
let limiteInferior = numero[0];
let limiteSuperior = 0;

for (let item of numero){
   if (item > limiteSuperior){
      limiteSuperior = item;
   }
   if(item < limiteInferior){
    limiteInferior = item;
   }
}

if (numero < limiteInferior || numero > limiteSuperior ) {
    console.log("NAO PERTENCE");
}else {
    console.log("PERTENCE");
}