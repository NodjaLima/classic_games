class ExibeAposta {
    mostrarAposta(aposta) {
        console.log(aposta)
        $('#numeros-aposta').html(`Sua aposta foi:  ${aposta[0]}  ${aposta[1]}  ${aposta[2]}  ${aposta[3]}  ${aposta[4]}  ${aposta[5]}`);

        $('#captar-aposta').removeClass('princ').addClass('esconde-aposta');

        $('#sorteio').removeClass('sorteio') 
    }

    mostrarSorteio(sorteio) {
        $('#numeros-sorteio').html(`Os números sorteados foram:  ${sorteio[0]}  ${sorteio[1]}  ${sorteio[2]}  ${sorteio[3]}  ${sorteio[4]}  ${sorteio[5]}`);

        $('#sorteio').addClass('sorteio')
    }

    mostrarResultado(resultado){
        $('#resultado-comparado').html(`Você acertou os seguintes números: ${resultado}`)
    }
}


function createButton() {
   
    for (var i = 1; i < 100; i++) {
   
    var btn = document.createElement('button');
    var lbl = document.createTextNode(`${i}`);        
    btn.appendChild(lbl); 
    btn.className = "butao"
    btn.id = `numero${i}`
    var div = document.getElementById('botoes')
    div.appendChild(btn); 
     
    }
}

createButton()