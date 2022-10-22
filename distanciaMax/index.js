const input = "3\n0 0\n0 3\n4 0";



  const linhas = input.trim().split("\n");
  const n = parseFloat(linhas[0]);

  const coordenadas = [];

  for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
      x: parseFloat(coord[0]),
      y: parseFloat(coord[1])
    })
  }
  let distancia = 0;

  for (let i = 0; i < coordenadas.length; i++) {
    for (let j = 1; j < coordenadas.length; j++) {

      let x = coordenadas[i].x - coordenadas[j].x;    
      let y = coordenadas[i].y - coordenadas[j].y;
     // let resultado = Math.hypot(x, y);
      let resultado =Math.sqrt((Math.pow(x, 2)) + (Math.pow(y, 2)))
      if (resultado > distancia) {
        distancia = resultado;
      }
    }
  }
  console.log(distancia)