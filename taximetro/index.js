let min = 25;
let km = 11.5;
let valorApagarMinutos = 0;
let valorApagarKm = 0;
let totalApagar = 0;
let valorAdicional = 0;
    
    if(km <= 10 && min > 20) {
        valorApagarMinutos +=  (min - 20) * 30;
        valorApagarMinutos += 50 * 20;
        valorApagarKm +=  70 * km;
        totalApagar += valorApagarMinutos + valorApagarKm;
        
      console.log(totalApagar);
        
    } if(km <= 10 && min <= 20) {      

       valorApagarMinutos += 50 * min;
       valorApagarKm +=  70 * km;
       totalApagar += valorApagarMinutos + valorApagarKm;
        
       console.log(totalApagar);
        
    } if(km > 10 && min > 20) { 
        
        valorApagarMinutos +=  (min - 20) * 30;
        valorApagarMinutos += 50 * 20;
        valorApagarKm +=  70 * 10;
        valorApagarKm +=  (km - 10) * 50;
        totalApagar += valorApagarMinutos + valorApagarKm;
        
      console.log(totalApagar);
        
     } if (km > 10 && min <= 20) {
      
       valorApagarKm +=  70 * 10;
       valorApagarKm +=  (km - 10) * 50;
       valorApagarMinutos += 50 * min;     
       totalApagar += valorApagarMinutos + valorApagarKm;
         
      console.log(totalApagar);
      }