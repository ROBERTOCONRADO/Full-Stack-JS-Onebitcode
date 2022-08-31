//           SPLICE

let shipsName = ['elemental', 'darwin', 'artemis', 'supernova']
console.log(shipsName)//['elemental', 'darwin', 'artemis', 'supernova']

let removeNames = shipsName.splice(1, 2, 'Golias', 'troy', 'puller')
console.log(shipsName)//['elemental', 'Golias', 'troy', 'puller', 'supernova']
console.log(removeNames)//['darwin', 'artemis']

//           SLICE

let nomes = ['jose', 'james', 'mariano', 'marcia']
let nomesexcluidos = nomes.slice(1, 3)// A partir da posição 1 exclui 1 e 2, o 3(marcia) não será excluído

console.log(nomes)//['jose', 'james', 'mariano', 'marcia']
console.log(nomesexcluidos)//['james', 'mariano']

