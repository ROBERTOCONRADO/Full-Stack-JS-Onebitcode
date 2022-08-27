let pessoaMV = prompt('Qual o nome da pessoa mais velha?')
let idadeMV = prompt('Qual a idade da pessoa mais velha?')
let pessoaMN = prompt('Qual o nome da pessoa mais nova?')
let idadeMN = prompt('Qual a idade da pessoa mais nova?')

let diferencaIdade = parseInt(idadeMV - idadeMN)

alert(`A pessoa mais velha se chama ${pessoaMV} e tem ${idadeMV} anos de idade \nA pessoa mais nova se chama ${pessoaMN} e tem ${idadeMN} anos de idade \nExiste uma diferença de ${diferencaIdade} anos de idade entre ${pessoaMV} & ${pessoaMN} `)
