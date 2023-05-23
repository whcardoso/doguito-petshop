import { clienteService } from '../service/cliente-service.js'

(async () => {
    const getURL = new URL(window.location)
    const id = getURL.searchParams.get('id')

    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')

    try {
        const dados = await clienteService.detalhaCliente(id)
        inputNome.value = dados.nome
        inputEmail.value = dados.email
    }
    catch (erro) {
        window.location.href = '../telas/erro.html'
    }

    const form = document.querySelector('[data-form]')

    form.addEventListener('submit', async (event) => {
        event.preventDefault()
        try {
            await clienteService.editaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = '../telas/edicao_concluida.html'
        }
        catch (erro) {
            window.location.href = '../telas/erro.html'
        }
    })
})()
