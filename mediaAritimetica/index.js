const lista = [2, 3, 4]
let media = 0;
let dias = 3;

for (let i = 0; i < lista.length; i++) {
   media += lista[i];     
}
 media = media / lista.length;
console.log(media)