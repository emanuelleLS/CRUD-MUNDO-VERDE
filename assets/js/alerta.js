const alerta_erro = (msg) => {
    const alerta = document.getElementById('alerta')
    alerta.hidden = false
    alerta.innerHTML = msg
    setTimeout(() => {
        alerta.hidden = true
        alerta.innerHTML = ''
    }, 5000)
    
}