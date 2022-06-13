class Aposta {
    constructor(...dezenas) {
        console.log(dezenas)
        this.aposta = [dezenas[0], dezenas[1], dezenas[2], dezenas[3], dezenas[4], dezenas[5]]
    }

    sorteio = []

    sorteiar = () => {
        for(let i =0; i<6; i++){
            this.sorteio.push(Math.round(Math.random() * 100))
        }
    }
}