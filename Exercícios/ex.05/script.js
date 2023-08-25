let num = document.getElementById("anum")
let lis = document.getElementById("flista")
let res = document.getElementById("res")
let vat = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else
    {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(n) {
    if (isNumero(num.value) && !inLista(num.value, vat)) {
        vat.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lis.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert('Valor inválido ou já encotrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (vat.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let tot = vat.length
        let maior = vat[0]
        let menor = vat[0]
        let soma = 0
        let media = 0 
        for (pos in vat) {
            soma += vat[pos]
            if (vat[pos] > maior) {
                maior = vat[pos]
            }
            if (vat[pos] < menor) {
                menor = vat[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}