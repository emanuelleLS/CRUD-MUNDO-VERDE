const validarFormulario = () => {
    descricao = document.getElementById('descricao').value
    categoria = document.getElementById('categoria').value
    preco = document.getElementById('preco').value
    quantidade = document.getElementById('quantidade').value

    if (!descricao) {
        alerta_erro('Faltou campo descrição!')
        return false
    }
    else if (!preco) {
        alerta_erro('Preencha o campo preço!')
        return false
    }
    else if (!quantidade) {
        alerta_erro('Faltou campo quantidade!')
        return false
    }
    return true
}