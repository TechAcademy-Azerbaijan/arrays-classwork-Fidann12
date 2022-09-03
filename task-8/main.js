const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let max = parseInt(n[0]);
    for (let i = 0; i <=n.length; i++) {
        if(parseInt(n[i])>max ){
            max=n[i]
        }
    }
    let count = 0;
    for(i= 0; i <=n.length ; i++){
        if(max==parseInt(n[i])){
            
            count++
        }
    }
  console.log(count);
  
});
