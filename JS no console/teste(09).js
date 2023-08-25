let num = [9,38,6,19,7,8]
console.log(num)
/*
for (pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for (pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}//Funciona apenas com vetores