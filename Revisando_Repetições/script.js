function inversor() {
   alert('Inversor de nomes')
    let nome = prompt('Qual nome deseja inverter?')
    let nomeInvertido = ''

    for(let i = nome.length - 1; i >= 0; i--) {
        nomeInvertido += nome[i]
    }
    alert(`Nome original: ${nome}\nNome invertido: ${nomeInvertido}`) 
}
