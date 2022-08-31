let shipsName = ['elemental', 'darwin', 'artemis', 'supernova']
console.log(shipsName)//['elemental', 'darwin', 'artemis', 'supernova']

let removeNames = shipsName.splice(1, 2, 'Golias', 'troy', 'puller')
console.log(shipsName)//['elemental', 'Golias', 'troy', 'puller', 'supernova']
console.log(removeNames)//['darwin', 'artemis']

