

function interacao() {
    alert('Neste exercício vamos simular o sistema de navegação de uma nave interagindo com o usuário.');
    let piloto = prompt('Qual o seu nome piloto?');
    let velocity = prompt(`${piloto}: Qual velocidade gostaria de acelerar a nave?`);
    if (velocity == null) {
        alert('Nenhuma velocidade atribuida!')
    }else {
        let confirmation = confirm(`Vamos acelerar a nave a ${velocity} KM/S! Você confirma?`);
        if (confirmation == true) {
        let naveVelocity = velocity
            if (naveVelocity <= 0) {
                alert('A nave está parada. Considere partir e aumentar a velocidade.');    
            } else if (naveVelocity < 40) {
                alert('Você está devagar, podemos aumentar mais!');
            } else if (naveVelocity >= 40 && naveVelocity <= 80) {
                alert('Parece uma boa velocity para manter.');
            } else if (naveVelocity > 80 && naveVelocity <= 100){
                alert('Velocidade alta. Considere diminuir.');
            } else if (naveVelocity > 100) {
                alert('Velocidade perigosa. Controle automático forçado.');
            }
        } else {
            alert(`Nave desligada! Aguardando ordem com Cap. ${piloto}`);
        } 
    }     
}
interacao();