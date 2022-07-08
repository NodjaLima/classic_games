class ApostaControle {
    criarAposta = new ApostaLoteria()
        
    pegarAposta = () => {
        return aposta_final
    }
    
    sorteio() {
        this.criarAposta.sorteiar()
        return this.criarAposta.sorteio
    }

    showAposta = new ExibeAposta()
}


$('#enviar').click(function (evento) {
    evento.preventDefault()
    const showingAposta = new ApostaControle()
    showingAposta.showAposta.mostrarAposta(showingAposta.criarAposta.aposta);
})

$('#sorteio').click(function (){
    const showingSorteio = new ApostaControle()
    showingSorteio.showAposta.mostrarSorteio(showingSorteio.sorteio())
    showingSorteio.criarAposta.comparar()
    showingSorteio.showAposta.mostrarResultado(showingSorteio.criarAposta.comparacao)
})


  

