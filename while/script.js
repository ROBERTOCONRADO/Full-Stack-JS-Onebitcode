function interagir() {
    alert('Neste exercício vamos simular a nevagação de uma nave interagindo com o usuário:')

    let dobras = 0
    let decisaoPiloto = ''
    let naveNome = prompt('Seja bem vindo a estação galactica! Qual o nome da sua nave?')
    decisaoPiloto = confirm('Deseja entrar na dobra espacial?')
    if (decisaoPiloto == true) {
        decisaoPiloto = '1'
    } else {
        decisaoPiloto = '2'
    }
    while(decisaoPiloto == '1') {
        dobras += 1
        
        decisaoPiloto = confirm('Deseja entrar em mais uma dobra espacial?')
    }

    alert(`Nave ${naveNome} realizou ${dobras} dobras`)
}
