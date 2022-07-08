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

//função para criar os botoes. Achei melhor colocar os botoes em um formulario, porque acredito que no futuro pode ser melhor para manipular a aposta. Por exemplo: se a pessoa quiser trocar o numero da aposta? Minha ideia é deixar os botoes que foram clicados, marcados e quando a pessoa enviar a aposta, confirmar os numeros. Por essa razão eu coloquei tantos atributos nos botoes, porque na verdade só estamos usando mesmo o onclick no js e a class no css.
//porém, acredito que a melhor forma de fazer seja pelo forms. Exemplo: seleciona os numeros e quando submeter o formulario é que pegamos os valores marcados, atraves dos botoes destacados


function createButton() {
   
    for (var i = 1; i < 100; i++) {
   
        var btn = document.createElement('input');
        var lbl = document.createTextNode(`${i}`);        
        btn.appendChild(lbl); 
        btn.className = "butao_verde"
        btn.value = `${i}`
        btn.type = 'button'
        btn.id = `${i}`
        btn.setAttribute("form", `botoes`)
        btn.setAttribute("onclick", `mudarAparencia(${i})`)
        var div = document.getElementById('botoes')
        div.appendChild(btn); 
        
    }
}

createButton()

var aposta_final = []

  function mudarAparencia(id) {

    let botao_selecionado = document.getElementById(`${id}`)
    
    if (botao_selecionado.className === "butao_verde") {
        botao_selecionado.className = "butao_azul"
        aposta_final.push(id)

    } else {
        botao_selecionado.className = 'butao_verde'
        aposta_final = aposta_final.filter((elem) => elem !== id)
        
    }

    console.log(aposta_final)
    
}