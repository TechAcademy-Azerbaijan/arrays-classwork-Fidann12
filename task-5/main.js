const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let n = result.input.split(" ")
    let arr = ['n'];
    let b = n[n.length -1]
    n.pop ();
    n.unshift(b)
    console.log(n);
