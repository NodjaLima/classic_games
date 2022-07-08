class ApostaLoteria {
    
    aposta = []
    
    sorteio = []

    sorteiar = () => {
        for(let i =0; i<5; i++){
            this.sorteio.push(Math.round(Math.random() * 100))
        }
        this.sorteio.push(15)
    }

    comparacao = []

    comparar = () => {
        let contador = 0
        for(let i = 0; i<this.aposta.length; i++){
            let numero = this.aposta[i]
            if(this.sorteio.includes(numero)){
                this.comparacao.push(numero)
                contador++
            }
        }
        return contador
    }

}

