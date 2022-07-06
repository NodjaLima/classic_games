class ApostaLoteria {
    constructor(...dezenas) {
        this.aposta = [dezenas[0], dezenas[1], dezenas[2], dezenas[3], dezenas[4], dezenas[5]]
    }

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