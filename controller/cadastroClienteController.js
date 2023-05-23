import { clienteService } from '../service/cliente-service.js'

const form = document.querySelector('[data-form]')

form.addEventListener('submit', async (event) => {
    event.preventDefault()

    try {
        const nome = event.target.querySelector('[data-nome]').value
        const email = event.target.querySelector('[data-email]').value
    
        await clienteService.criarCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'
    }
    catch(erro) {
        window.location.href = '../telas/erro.html'
    }
})