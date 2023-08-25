function carregar() {
    //var msg1 = window.document.getElementById('msg1')
    //var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var min = data.getMinutes()
    var hora = data.getHours()
    //var hora = 1
    msg1.innerHTML = `Agora são ${hora}:${min}`
    if (hora >= 6 && hora < 12) {
        //BOM DIA!!
        msg2.innerHTML = 'Bom dia meu mano!!'
        img.src = 'manhã.jpg'
        document.body.style.background = '#cfd159'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!
        msg2.innerHTML = 'Boa tarde meu mano!!'
        img.src = 'tarde.jpg'
        document.body.style.background = '#865221'
    } else if (hora > 18 && hora <= 23) {
        //BOA NOITE!!
        msg2.innerHTML = 'Boa noite meu mano!!'
        img.src = 'noite.jpg'
        document.body.style.background = '#0c073a'
        
    } else {
        //BOA MADRUGADA
        msg2.innerHTML = 'Boa madruga meu mano!!'
        img.src = 'noite.jpg'
        document.body.style.background = '#0c073a'
    }
}