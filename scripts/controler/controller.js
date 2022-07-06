class ApostaControle {
    criarAposta = new ApostaLoteria(
        Number($('#numero1').val()),
        Number($('#numero2').val()),
        Number($('#numero3').val()),
        Number($('#numero4').val()),
        Number($('#numero5').val()),
        Number($('#numero6').val()))
    
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
    showingSorteio.criarAposta.comparar()
    showingSorteio.showAposta.mostrarResultado(showingSorteio.criarAposta.comparacao)
})