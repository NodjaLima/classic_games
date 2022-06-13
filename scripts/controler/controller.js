class ApostaControle {
    criarAposta = new Aposta(
        $('#numero1').val(),
        $('#numero2').val(),
        $('#numero3').val(),
        $('#numero4').val(),
        $('#numero5').val(),
        $('#numero6').val())
    
    sorteio() {
        this.criarAposta.sorteiar()
        return this.criarAposta.sorteio
    }

    showAposta = new ExibeAposta()
}



$('#enviar').click(function () {
    const showingAposta = new ApostaControle()
    showingAposta.showAposta.mostrarAposta(showingAposta.criarAposta.aposta);
})

$('#sorteio').click(function (){
    const showingSorteio = new ApostaControle()
    showingSorteio.showAposta.mostrarSorteio(showingSorteio.sorteio())
})