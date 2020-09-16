const readline = require('readline')
const inp = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
var fact;
inp.on('line',(data) => {

fact=data.split(' ').map(i => Number(i))
})

function factorial(x) {
if (x == 0) {
    return 1;
}


else {
    return x * factorial(x - 1);
}
}


inp.on('close',() =>{
    console.log(factorial (fact));
})
