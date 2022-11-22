const readline = require('readline').createinterface({
    input: proces.stdin,
    output: process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readline.question('Informe sua idade:', input => { 
    leituraDeCampo = input 
    console.log(`o usuario digitou: ${leituraDeCampo}`);
});


