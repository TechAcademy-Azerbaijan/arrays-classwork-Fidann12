const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let max = 0;
    let min = parseInt(n[0]);
     for (i=0; i<n.length ;i++){
       if(n[i]>max){
             max=n[i]
         }
     }
    for(i=0 ; i<n.length ; i++){
        if(n[i]<min){
            min=n[i];
            
        }
    }
    console.log(max-min);
});
