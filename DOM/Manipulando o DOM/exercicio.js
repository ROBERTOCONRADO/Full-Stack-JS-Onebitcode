function add() {
    let numero = document.querySelector("input[name='numero']").value;
    let bairro = document.querySelector("input[name='bairro']").value;
    let cidade = document.querySelector("input[name='cidade']").value;
    let area = document.querySelector("input[name='area']").value;
    
    let novaLista = document.createElement("li")
    novaLista.innerText = `Número: ${numero}\nCidade: ${cidade}\nÁrea: ${area} m²\nBairro: ${bairro}`

    let removerBotao = document.createElement("button")
    removerBotao.type = "button"
    removerBotao.innerText = "Remover"
    removerBotao.setAttribute("onclick", "removeHouse(this)");
}