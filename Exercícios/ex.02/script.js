function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novante!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ""
        /*
        var img = window.document.createElement('img')
        img.createAttribute('id', 'foto')
        isso pega uma imagem salva sem precisar mexer no HTML   
        */
        if (fsex[0].checked) {
            genero = "Homem"
            /*
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
             isso compara as idade para aparecer uma imagem
            */
        } else if (fsex[1].checked){
            genero = "Mulher"
            /*
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                /img.setAttribute('src', 'foto-idoso-f.png')
            }
            isso compara as idade para aparecer uma imagem
            */
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
    }

}