class ApostaControle {
    criarAposta = new ApostaLoteria()
        
    pegarAposta = () => {

    }
    
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

const aposta = []

function clickTeclado(indice) {
    
   
    if(aposta.length <=5) {

        aposta.push(indice);

           
    };

    console.log(aposta)

  }

  

