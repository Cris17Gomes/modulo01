
   const input = "cubos\ncuggbyos";

    let senhaC = input.split("\n")[0];//cubos
    let senhaE = input.split("\n")[1];//cuggbyos
    let senhaV = "";
    let contador = 0;

     for(let i = 0; i < senhaC.length; i++){   //i  c u b o s
         
        for(let j = contador; j < senhaE.length;j++){ //j  c u g g b y o s
      
         if(senhaC[i] ===  senhaE[j]) {
            senhaV += senhaE[j]
            contador = j;
       break;
   }      
   } 
}
     if(senhaC === senhaV){
    console.log("SIM")
  }else{
     console.log("NAO")
  }
  