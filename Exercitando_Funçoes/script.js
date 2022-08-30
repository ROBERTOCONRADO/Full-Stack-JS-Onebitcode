let naveNome = prompt('Digite o nome da nave!');
let naveVelocidade = 0;
let chosenOptions 

function menu() {
    let option
    while(option != '1' && option != '2' && option != '3' && option != '4') {
        option = prompt(`O que deseja fazer?\n
                        1- Acelerar a nave em 5km/s\n
                        2- Desacelerar a nave em 5km/s\n
                        3- Imprimir dados de bordo\n
                        4- Sair do programa`)
    }
    return option
}

function acelerar(velocidade) {
    let novaVelocidade = velocidade + 5
    return novaVelocidade
}

function desacelerar(velocidade) {
    let novaVelocidade = velocidade - 5
    if(novaVelocidade < 0) {
        novaVelocidade = 0
    }
    return novaVelocidade
}

function imprimirDados(nome, velocidade) {
    alert(`Espaçonave: ${nome}\nVelocidade: ${velocidade} km/s`);
}

do {
    chosenOptions = menu()
    switch(chosenOptions) {
        case '1':
            naveVelocidade = acelerar(naveVelocidade);
            break;
        case '2':
            naveVelocidade = desacelerar(naveVelocidade);
            break;
        case '3':
            imprimirDados(naveNome, naveVelocidade);
            break;
        default:
            alert('Encerrando programa de bordo!')    
    }
} while(chosenOptions != '4')
