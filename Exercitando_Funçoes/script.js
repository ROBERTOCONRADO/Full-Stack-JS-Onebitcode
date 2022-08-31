function start()  { 

 
    let naveNome = prompt('Digite o nome da nave!');
    let naveVelocidade = 0
    let chosenOption

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
        chosenOption = menu()
        switch(chosenOption) {
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
    } while(chosenOption != '4')

} 

/*Neste exercício vamos simular o computador de bordo de uma espaçonave no momento em que ela inicia a parada até abrir as comportas para os pilótos saírem*/
function ativar() {
   function slowDown (velocity, printer) {
        let deceleration = 20

        while(velocity > 0) {
            printer(velocity)
            velocity -= deceleration
        }

        alert('Nave parada. As comportas podem ser abertas.')
    }

    let spaceshipVelocity = 150

    slowDown(spaceshipVelocity, function(velocity) {
        alert(`Velocidade atual: ${velocity}`)
    }) 
}
