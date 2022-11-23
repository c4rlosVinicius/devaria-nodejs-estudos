const readLine = require('readline').createInterface({
    input : process.stdidn,
    output : process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se você pode entrar no kart');
console.log('Além da suas verificações, precisamos verificar se você esta na lista de presença do horário');

readLine.question('Qual o ano de seu nascimento?',ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos');
    }else{
        readLine.question('Você tem habilitação? (sim/não)', temHabilitação =>{
            if(!(temHabilitação.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação para entrar no kart');
            }else{
                readLine.question('Qual seu nome?', nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('bem vindo ao Kart Douglas');
                            break;
                        case 'Carlos' :
                            console .log('Bem vindo ao Kart Carlos');
                        default:
                            console.log('Seu nome não foi identificado na lista de presença');
                    }       
                });
            }
        })
    }
})