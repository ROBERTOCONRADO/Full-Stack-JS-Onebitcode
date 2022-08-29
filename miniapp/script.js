function caucular() {

    let dataPartida = prompt('Digite a data de partida (formato DD/MM/YYYY)');
    let departureDate = moment(dataPartida, 'DD/MM/YYYY');
    let today = moment();//transforma uma data em milisegundos
    let dateDiff = today - departureDate
    let modo = prompt('Escolha como gostaria de exibir o tempo de partida \n1- Segundos \n2- Minutos \n3- Horas \n4- Dias');
    if (modo == 1) {
        let segundos = Math.round(dateDiff / 1000);
        alert(`Tempo passado: ${segundos} segundos.`)
    } else if (modo == 2) {
        let minutos = Math.round(dateDiff / 1000 / 60);
        alert(`Tempo passado: ${minutos} minutos.`)
    } else if (modo == 3) {
        let horas = Math.round(dateDiff / 1000 / 3600);
        alert(`Tempo passado: ${horas} horas.`)
    } else if (modo == 4) {
        let dias = Math.round(dateDiff / 1000 / 3600 / 24);
        alert(`Tempo passado: ${dias} Dias.`)
    } else {
        alert(`Opção inválida!! Escolha (1), (2), (3), (4)`);
    }
}
