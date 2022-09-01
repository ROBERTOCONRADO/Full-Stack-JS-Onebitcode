function addNovoTelefone() {
    const formPhone = document.querySelector('form#telefones');
    const novoTel = formPhone.children[0].cloneNode(true);
    const posicaoTell = formPhone.children.length + 1;
    novoTel.querySelector("label").innerText = `Telefone: ${posicaoTell}`;
    formPhone.appendChild(novoTel);
    console.log(formPhone.children);
}



function imprimirTell() {
    let message = ""
    const phones = document.querySelectorAll("input[name='tell']");
    phones.forEach((tell, index) => {
        message += `Telefone ${index + 1}: ${tell.value}\n`
    })
    alert(message)
}