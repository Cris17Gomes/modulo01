
 let jogadores = [
    {
      nome: "Herman",
      jogada: 1
    },
    {
      nome: "Rhodes",
      jogada: 0
    },
    {
      nome: "Beach",
      jogada: 0
    },
    {
      nome: "Laurel",
      jogada: 0
    },
    {
      nome: "Beatrice",
      jogada: 0
    },
    {
      nome: "Alison",
      jogada: 0
    },
    {
      nome: "Saundra",
      jogada: 0
    },
    {
      nome: "Klein",
      jogada: 0
    }
    
  ]
let jogadorA = 0;
let jogadorB = 0;
let vencedor = "";
  //separar 0 e 1 

  
  for (let item of jogadores) {
      if (item.jogada === 0) {
          jogadorA++;
      } else {
          jogadorB++;
      }
  }

       if (jogadorB === 1) {

      for (let item of jogadores) {
          if (item.jogada === 1) {
              vencedor = item.nome;
          }
      }
  } else if (jogadorA === 1) {
      for (let item of jogadores) {
          if (item.jogada === 0) {
              vencedor = item.nome;
          }
      }
  } else {
      console.log("NINGUEM")
  }

  console.log(vencedor);