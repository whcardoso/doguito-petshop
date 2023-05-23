const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(response => {
            return response.json()
        })
}

const criarCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(response => {
        return response.body
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(response => {
            return response.json()
        })
}

const editaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then(response => {
        return response.json()
    })
}

export const clienteService = {
    listaClientes,
    criarCliente,
    removeCliente,
    detalhaCliente,
    editaCliente
}
