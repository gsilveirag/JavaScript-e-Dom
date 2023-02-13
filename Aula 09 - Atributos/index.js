const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    // input.value = input.value === ' ' ? 'Ola, mundo' : ' ' // Se tiver vazio ele transforma na frase e depois alterna
    input.value = 'Ola, mundo!'
    
    console.log(input.getAttribute('value')) // Armazena a primeira info.
    console.log(input.value)
})

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'radio' ? 'radio' :  'text' // se for diferente de radio ele vira se nao ele vira texto
    // input.setAttribute('type', 'radio') // Tambem funciona, mas nao muda mais
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = "Digite Algo"
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something
    console.log('O valor e: ' + data)
    input.dataset.something = "Outro Valor"
    console.log('O outro valor e: ' + input.dataset.something)
})