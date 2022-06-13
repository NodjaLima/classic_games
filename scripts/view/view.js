class ExibeAposta {
    mostrarAposta = (aposta) => {
        $('#numeros-aposta').html(`Sua aposta foi:  ${aposta[0]}  ${aposta[1]}  ${aposta[2]}  ${aposta[3]}  ${aposta[4]}  ${aposta[5]}`);

        $('#captar-aposta').removeClass('princ').addClass('esconde-aposta');

        $('#sorteio').removeClass('sorteio') 
    }

    mostrarSorteio = (sorteio) => {
        $('#numeros-sorteio').html(`Os números sorteados foram:  ${sorteio[0]}  ${sorteio[1]}  ${sorteio[2]}  ${sorteio[3]}  ${sorteio[4]}  ${sorteio[5]}`);

        $('#sorteio').addClass('sorteio')
    }
}