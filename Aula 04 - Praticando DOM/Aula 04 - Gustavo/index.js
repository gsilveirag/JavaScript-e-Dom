function addContato(){
    const sectionContatos = document.getElementById('novosContatos')

    const h3 =  document.createElement('h3')
    h3.innerText = 'Contato a Adcionar:'

    const ul = document.createElement('ul')
    const nameLi = document.createElement('li')
    const nameIp = document.createElement('input')
    nameLi.innerText = 'Nome: '
    nameIp.type = 'text'
    nameIp.nome = 'nome'
    nameLi.appendChild(nameIp)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const enderecoLi = document.createElement('li')
    const enderecoIp = document.createElement('input')
    enderecoLi.innerText = 'Endereco: '
    enderecoIp.type = 'text'
    enderecoIp.nome = 'endereco'
    enderecoLi.appendChild(enderecoIp)
    ul.appendChild(enderecoLi)



    sectionContatos.append(h3, ul)
}

function removerContato(){
    const contactSection = document.getElementById('novosContatos')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}