//funcao para enviar os dados do formulário para o servidor via POST
const salvar = () => {
    if (!validarFormulario())
        return
    const dados = {
        descricao: document.getElementById('descricao').value,
        categoria: parseInt(document.getElementById('categoria').value),
        preco: parseFloat(document.getElementById('preco').value.replace(',','.')),
        quantidade: parseInt(document.getElementById('quantidade').value),
        url: document.getElementById('url').value
    }
    //envia os dados para o servidor
    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)

        //converte a resposta do servidor em objeto json
    }).then(res => res.json()
        //pega o objeto json convertido
    ).then(data => {
        console.log('Retorno do Servidor: \n', data)
    }).then(() => {
        console.log('Sucesso ao cadastrar produto')
        location.href = 'index.html'
    }).catch(erro => alerta_erro(`Erro ao cadastrar produto: ${erro}`))
}