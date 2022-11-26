const listaDeProdutosDisponveis = [
    "Pão",
    "Leite",
    "Café",
    "Laranja",
    "Macarrão",
    "Sabonete",
    "Detergente",
];

const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponveis.filter(produto => {
    return listaDeArgumentos.find(argumeto => argumeto  === produto);
})

listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));

const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
    return !listaDeProdutosDisponveis.find(produto => produto === argumento);
})
listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nós não temos: ${argumento}`));

const listaDeProdutosOrdenados = listaDeProdutosDisponveis.sort();
listaDeProdutosOrdenados.forEach(produto => console.log(`Este produto esta disponivel: ${produto}`))