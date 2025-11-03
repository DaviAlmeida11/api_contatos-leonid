'use strict'
async function lerContato(){
    const url =  'https://bakcend-fecaf-render.onrender.com/contatos/'


const response = await fetch(url)
const contatos = await response.json()

console.log(contatos)
return contatos
}
async function criarContato (contato) {
    const url = 'https://bakcend-fecaf-render.onrender.com/contatos/'

    const options = {
        'method': 'POST',
        'headers': {
            'content-type':'application/json'
        },
        'body': JSON.stringify(contato)
    }
    const response = await fetch(url,options)
    
    console.log(response.ok)
    return response.ok
}

const novoContato = {
    
          "nome": "Davi Atualizado",
          "celular": "11 9 9171-6464",
          "foto": "semfoto.png",
          "email": "Davi de Almeida Santos.com",
          "endereco": "Rua Serra do Mar, 234",
          "cidade": "Itapevi"
        

}

async function atualizarContato (id, contato ) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        'method': 'PUT',
        'headers': {
            'content-type':'application/json'
        },
        'body': JSON.stringify(contato)
    }
    const response = await fetch(url,options)
    
    console.log(response.ok)
    return response.ok
}

async function excluirContato (id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`
    const options = {
        method: 'DELETE'

    }
    const response = await fetch(url,options)
    
    console.log(response.ok)
    return response.ok
}


