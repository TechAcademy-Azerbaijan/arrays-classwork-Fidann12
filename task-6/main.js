const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");
    let max = 0
    let min = parseInt(n[0]);
    if (n.length <= 2) {
        console.log("Ooops!");
        return
    } 
        for (i = 0; i < n.length; i++) {
            if (n[i] < min) {
                min = n[i]
                
            }
            if (n[i] > max) {
                max = n[i];
            }

        }


    console.log(min);
    console.log(max);
  
});
