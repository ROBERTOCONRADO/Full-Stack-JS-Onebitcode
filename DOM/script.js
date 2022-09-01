function show() {
    let element = document.getElementById('name');
    console.log(element.value);
}

function chamar1() {
    let element = document.getElementsByName('telefone');
    console.log(element[0].value);
}

function chamar2() {
    let element = document.getElementsByName('telefone');
    console.log(element[1].value);
}