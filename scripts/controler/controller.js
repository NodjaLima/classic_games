class ApostaControle {
    aposta = new Aposta(
        $('#numero1').val(),
        $('#numero2').val(),
        $('#numero3').val(),
        $('#numero4').val(),
        $('#numero5').val(),
        $('#numero6').val())
    
    sorteio = () => {
        aposta.sorteiar()
        return aposta.sorteio
    }
}

