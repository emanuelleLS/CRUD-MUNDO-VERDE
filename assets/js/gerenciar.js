//                          0             1           2
const tipo_categoria = ['Cereais', 'Suplementos', 'Temperos']


// executa logo após a página gerenciar.html ser carrega
document.addEventListener('DOMContentLoaded', () => {

    // solicita ao servidor a lista de todos os produtos,
    // porém de forma ASSÍNCRONA
    fetch('http://localhost:3000/produtos')

    // após chegar a resposta do servidor...
    // converte a string recebida em uma lista de objetos json
    .then(res => res.json())

    // pega a lista (array javascript) recebida e processa
    .then(lista => {
        if (lista.length == 0)
            alerta_erro('Nenhum produto encontrado no banco de dados')
        else
            adicionarNaTabela(lista)

    // se ocorrer algum erro, então processa
    }).catch(erro => alerta_erro(`Erro ao consultar produtos: ${erro}`))

})


// função para mostrar na tabela a lista de produtos
const adicionarNaTabela = (lista) => {

    const tabela = document.getElementById('tabela')

    lista.forEach(produto => {
        // calcula o número da linha atual da tabela
        const tamanhoTabela = tabela.rows.length   

        // insere uma linha abaixo da última 
        const linha = tabela.insertRow(tamanhoTabela)

        // insere as células (colunas) da linha
        const id = linha.insertCell(0)

        // adiciona o id no elemento gráfico (linha da tabela)
        linha.id = produto.id

        // cria outras células (colunas)
        const descricao = linha.insertCell(1)
        const categoria = linha.insertCell(2)
        const preco = linha.insertCell(3)
        const quantidade = linha.insertCell(4)
        const imagem = linha.insertCell(5)
        const alterar = linha.insertCell(6)
        const excluir = linha.insertCell(7)

        // preenche as células de cada linha com os dados recebidos do banco
        id.innerHTML = produto.id
        descricao.innerHTML = produto.descricao
        categoria.innerHTML = tipo_categoria[produto.categoria]
        preco.innerHTML = produto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        quantidade.innerHTML = produto.quantidade
        const url = produto.url.toLowerCase()

        // se a url iniciar por 'http' => é uma imagem da web
        if (url.substring(0, 4) === 'http')
            imagem.innerHTML = `<img src='${url}' class='img-thumbnail' alt='Foto do Produto'>`
        // imagem da pasta galeria
        else   
            imagem.innerHTML = `<img src='galeria/${url}' class='img-thumbnail' alt='Foto do Produto'>`

        alterar.innerHTML = `<a href='alterar.html?id=${produto.id}' class='btn btn-outline-success mt-4'>Alterar</a>`

        excluir.innerHTML = `<button onclick='excluirDaTabela(${produto.id})' class='btn btn-outline-danger mt-4'>Excluir</button>` 
    })
}



// função para excluir uma linha da tabela e o produto do banco
const excluirDaTabela = (id) => {

    // envia solicitação para o servidor delete o produto id = ?
    fetch('http://localhost:3000/produtos/' + id, {method: 'DELETE'})

    // converte a resposta do servidor para objeto json
    .then(res => res.json())

    .then(res => {
        if (res.retorno)
            document.getElementById(id).remove()
    })

    // se houver erro
    .catch(erro => alerta_erro(`Erro ao excluir produto: ${erro}`))

}


