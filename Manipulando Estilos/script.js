function funcao1() {
    let element = document.getElementById("style-text");
    element.style.borderRadius = "3px"
    element.style.backgroundColor = "#124578"
    element.style.padding = "25px"
    element.style.textShadow = "2px 2px white"
    element.style.fontHeigth = "bold"
    element.style.transform = "rotate(10deg)"
}
function funcao2() {
    let element = document.getElementById("style-text");
    element.classList.add("teste")
}
function funcao3() {
    let element = document.getElementById("style-text");
    element.classList.remove("teste")
}
function funcao4() {
    let element = document.getElementById("style-text");
    element.classList.add("text-shadow")
}
function funcao5() {
    let element = document.getElementById("style-text");
    element.classList.remove("text-shadow")
}
function funcao6() {
    let element = document.getElementById("style-text");
    element.classList.add("atention")
}
function funcao7() {
    let element = document.getElementById("style-text");
    element.classList.remove("atention")
}
