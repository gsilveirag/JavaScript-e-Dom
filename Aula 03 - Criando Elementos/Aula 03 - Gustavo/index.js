function addInputs(){
    const ul = document.getElementById('listInputs')

    const li = document.createElement('li')
    li.innerText = "Nome: "
    li.tagName = "listaInputs"

    const input = document.createElement('input')
    input.type = 'text'
    input.id = "inputId"
    
    ul.appendChild(li)
    ul.appendChild(input)
}