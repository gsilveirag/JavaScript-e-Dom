function addJogador(){

    // o value pega os valores nos campos
    const posicao = document.getElementById('posicao').value
    const nome = document.getElementById('nome').value
    const numero = document.getElementById('numero').value

    const confirmacao = confirm ("Deseja realmente escalar?\n"
    + "Nome: " + nome + "\n"
    + "Posicao: " + posicao + "\n"
    + "Numero da Camisa: " + numero + "\n"
    )

    if(confirmacao){
        const listaJogadores = document.getElementById("lista-jogadores")
        const jogadorId =  document.createElement('li')
        jogadorId.id = "jogador:" + numero
        jogadorId.innerText = posicao + ": " + nome + " (" + numero + " )"
        listaJogadores.appendChild(jogadorId)

        // ele apaga as posicoes
        document.getElementById("posicao").value = ""
        document.getElementById("nome").value = ""
        document.getElementById("numero").value = ""
    }
}

function removerJogador(){
    const numero = document.getElementById('numeroRemover').value
    const jogadorRemover = document.getElementById('jogador:' + numero)

    const confirmacao = confirm("Remover o jogador?\n"
    + jogadorRemover.innerText)

    if (confirmacao){
        document.getElementById('lista-jogadores').removeChild(jogadorRemover)
        document.getElementById('numeroRemover').value = ''
    }
}