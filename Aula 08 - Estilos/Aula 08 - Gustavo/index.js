function temaPreto(){
    document.body.style.color = 'white'
    document.body.style.backgroundColor = 'black'
}

function temaBranco(){
    document.body.style.color = 'black'
    document.body.style.backgroundColor = 'white'
}

function temaAzul(){
    document.body.style.color = 'white'
    document.body.style.backgroundColor = '#00ffff'
}

document.getElementById('btnPreto').addEventListener('click', temaPreto)
document.getElementById('btnBranco').addEventListener('click', temaBranco)
document.getElementById('btnAzul').addEventListener('click', temaAzul)