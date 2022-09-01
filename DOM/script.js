function show() {
    let element = document.getElementById('name');
    alert(element.value);
}

function chamar1() {
    let element = document.getElementsByName('telefone');
    alert(element[0].value);
}

function chamar2() {
    let element = document.getElementsByName('telefone');
    alert(element[1].value);
}

function chamar4() {
    let element = document.querySelectorAll("div#contatos input[name='telefone']");
    alert(element[0].value);
}

function chamar5() {
    let element = document.getElementsByTagName('input')
    alert(element[2].value);
}