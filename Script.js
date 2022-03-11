
function Enviar () {
    var senha = document.getElementById ('senha')
    var senhaN = parseInt(senha.value)
    var confirmar = document.getElementById ('confirmar')
    var confirmarN = parseInt(confirmar.value) 
    var resultado = document.getElementById ('result')
    if (senhaN === confirmarN){
        resultado.innerHTML = 'A senha está correta'
    }else{
        resultado.innerHTML = 'As senhas não conferem'
    }
}