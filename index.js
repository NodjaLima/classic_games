// class Aposta {
//   constructor (dezena1, dezena2, dezena3, dezena4, dezena5, dezena6 ) {
//     this.dezena1 = dezena1;
//     this.dezena2 = dezena2;
//     this.dezena3 = dezena3;
//     this.dezena4 = dezena4;
//     this.dezena5 = dezena5;
//     this.dezena6 = dezena6;
//   }
// }

// class Sorteio {
//   constructor (sorteado1, sorteado2, sorteado3, sorteado4, sorteado5, sorteado6) {
//     this.sorteado1 = sorteado1
//     this.sorteado2 = sorteado2
//     this.sorteado3 = sorteado3
//     this.sorteado4 = sorteado4
//     this.sorteado5 = sorteado5
//     this.sorteado6 = sorteado6
//   }
// }

const aposta1 = $('#enviar').on('click', function apostar() {
  const numero1 = $('#numero1').val()
  const numero2 = $('#numero2').val()
  const numero3 = $('#numero3').val()
  const numero4 = $('#numero4').val()
  const numero5 = $('#numero5').val()
  const numero6 = $('#numero6').val() 
  const aposta = new Aposta (numero1, numero2, numero3, numero4, numero5, numero6)
console.log(aposta)
  exibeAposta(numero1, numero2, numero3, numero4, numero5, numero6)
})

function exibeAposta(numero1, numero2, numero3, numero4, numero5, numero6) {
  $('#numeros-aposta').html(`Sua aposta foi:  ${numero1}  ${numero2}  ${numero3}  ${numero4}  ${numero5}  ${numero6}`)
  $('#captar-aposta').removeClass('princ').addClass('esconde-aposta')
  exibeBtnSorteio()
}

function exibeBtnSorteio() {
  $('#sorteio').removeClass('sorteio')
}

const loteria = $('#sorteio').on('click', function () {
  const sort1 = Math.round(Math.random() * 100)
  const sort2 = Math.round(Math.random() * 100)
  const sort3 = Math.round(Math.random() * 100)
  const sort4 = Math.round(Math.random() * 100)
  const sort5 = Math.round(Math.random() * 100)
  const sort6 = Math.round(Math.random() * 100)

  const sorteio = new Sorteio(sort1, sort2, sort3, sort4, sort5, sort6)

  exibeSorteio(sort1, sort2, sort3, sort4, sort5, sort6)
  console.log(sorteio)

})

function exibeSorteio(sort1, sort2, sort3, sort4, sort5, sort6) {
  $('#numeros-sorteio').html(`Os números sorteados foram:  ${sort1}  ${sort2}  ${sort3}  ${sort4}  ${sort5}  ${sort6}`)
  $('#sorteio').addClass('sorteio')
  confereResultado(this.sorteio, this.aposta)
}

function confereResultado(sorteio, aposta) {

  
}

  




// comparar os numeros apostados com os numeros sorteados
// mensagem com resultados
