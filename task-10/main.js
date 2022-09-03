const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let max = n[0];
    let second_max = n[0]
    for (i = 0; i < n.length; i++) {
        if (n[i] > max) {
            max = parseInt(n[i]);
        }
    }
        for(i=0 ; i<n.length ; i++){
            if(n[i]<max && n[i]>second_max ){
                second_max = parseInt(n[i])

            }
        }
        let sum = second_max+max
        
        console.log(sum);
  
});
