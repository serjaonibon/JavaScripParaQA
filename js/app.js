console.log('Olá, Javascript')

//var useName = 'Sergio Nibon'

//document.getElementById('user-name').innerHTML = useName

// Variáveis //

/*

var nome = 'Mestre Yoda'
var idade = 100
var jedi = true

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof jedi)

*/


// Operadores de Comparação  //

/*
var v1 = 5
var v2 = '5'

var resultado = v1 != v2
console.log(resultado)
*/

//function soma (n1, n2) {
 //   console.log(n1 + n2)
//}
//soma(10, 10)

/*
function boasVindas() {
    alert('Sejam bem vindos!')
}

boasVindas()
*/

// function soma(n1, n2) {
//     return n1 + n2
// }

// var resultado = soma(5, 5)
// console.log(resultado)


// Controle de fluxos

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para comprar em locais que não aceitam cartões

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de R$ 1.000,00
// Quando faço um saque de R$ 500,00
// Então o valor do saque deve ser deduzido do meu saldo

/*

var saldo = 1000

function saque(valor) {
    saldo = saldo - valor
}
saque(500)
console.log(saldo)

*/

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de R$ 1.000,00
// Quando faço um saque de R$ 1.001,00
// Então não deve deduzir do meu saldo 
// E deve mostrar uma mensagem  de alerta informando que o valor superior ao saldo 


/*
var saldo = 1000

function saque(valor) {
    if(valor > saldo) {
        console.log('Valor do saque superior que o saldo!')
    } else {
        saldo = saldo - valor
    }    
}
saque(1001)
console.log(saldo)

*/

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de R$ 1.000,00
// E o valor máximo por operação é de R$ 700,00
// Quando faço um saque no valor de R$ 701,00
// Então não deve deduzir do meu saldo
// E deve mostrar uma memsagem de alerta informando que o valor é superior ao máximo permitido

/*

var saldo = 1000

function saque(valor) {
    if(valor > saldo) {
        console.log('Valor do saque superior que o saldo!')
    } else if(valor > 700)  {
        console.log('Valor do saque é superior ao máximo permitido por operação.')
    }
    else {
        saldo = saldo - valor
    }    
}
saque(701)
console.log(saldo)

*/


// Array //

//var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']
//console.log(gaveteiro[0])

/*

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Léia', 'Darth Vader']
// console.log(typeof personagens)
personagens.push('C3PO')

personagens.push('R2D2')

// personagens.pop()

personagens = personagens.filter(function(p) {
    return p !== 'Darth Vader'
})

personagens = personagens.filter(function(p) {
    return p === 'Mestre Yoda'
})


console.log(personagens)

*/

// Controles de repetição (loops) //

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Léia', 'Darth Vader']
// personagens.push('R2D2')

// personagens.forEach(function(p){
//     console.log(p)
// })

// for(var  i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i ++) [
//     console.log(i)
//     // Esse código va ser executado até a condição retornar false
// ]

// Objetos //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function(){
//         console.log(`A idade do ${this.nome} é de ${this.idade} anos.`)
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()

// Constantes //

const nome = 'Darth Vader'
console.log(nome)
nome = 'Mestre Yoda'
console.log(nome)