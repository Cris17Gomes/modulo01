const lista = [12, 18, 27];
const maiorEntreAdultos = [];
   
for ( let item of lista){
     if (item >= 18) {
      maiorEntreAdultos.push(item); 
  }
   } 
 if(maiorEntreAdultos.length > 1){
     console.log(Math.min(...maiorEntreAdultos));
  }  else {
      console.log("CRESCA E APARECA");
  } 