const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ");//14 17 16 3 7 19 9
    let arr = []
    for (i = 0; i < n.length; i++) {
        if (n[i] % 2 != 0) {
            arr.push(n[i]);
            
        }
    }
    console.log(arr.join(" "));
  
});
