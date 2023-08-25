let num = [9,3,6,2,7]
num.push(1)//Deve ser colocado antes do comando 'num.sort()
num.sort()
console.log(`Nosso vetor é: ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é: ${num[0]}`)
let pos = num.indexOf()
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}