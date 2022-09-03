const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n =result.input.split(" ");
    for(let i =0 ; i<n.length ; i++){
        if(n[i]>0){
            n[i]=parseInt(n[i])+2
        }
        else if (n[i]<0){
            n[i]=parseInt(n[i]);
            
        }
    }
    console.log(n.join(" "));
  
});
