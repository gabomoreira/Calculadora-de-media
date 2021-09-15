function resultado() {
  
    var media;
      
      var n1 = Number(document.getElementById('n1').value)
      var n2 = Number(document.getElementById('n2').value)
      var n3 = Number(document.getElementById('n3').value)
      var n4 = Number(document.getElementById('n4').value)
    
    media = ((n1 + n2 + n3 + n4) / 4).toFixed(1)
      
      if (media > 6) {
        document.getElementById("resposta").innerHTML = (media = `Parabéns cdf você foi aprovado com uma média de ${media} pontos, boas férias!`);
      }
      else {
        document.getElementById("resposta").innerHTML = (media = `É uma pena mas você foi reprovado com uma média de  ${media} pontos, tente novamente no próximo ano kkkkkk`);
      }
      console.log(media);
    }
