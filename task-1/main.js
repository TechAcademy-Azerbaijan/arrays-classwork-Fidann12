const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let sum = 0
    for (i = 0; i<n.length ; i++){
        
        sum = sum+parseFloat (n[i])
    }
     
    console.log(sum); 
  
});
