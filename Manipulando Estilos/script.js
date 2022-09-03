function funcao1() {
    let element = document.getElementById("style-text");
    element.style.borderRadius = "3px"
    element.style.backgroundColor = "blue"
    element.style.padding = "25px"
    element.style.textShadow = "2px 2px white"
    element.style.fontHeigth = "bold"
    element.style.transform = "rotate(10deg)"
    element.style.animation = "1s infinite alternate"
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
    element.classList.add("text-shadow-pop-tl")
}
function funcao5() {
    let element = document.getElementById("style-text");
    element.classList.remove("text-shadow-pop-tl")
}
function funcao6() {
    let element = document.getElementById("style-text");
    element.classList.add("atention")
}
function funcao7() {
    let element = document.getElementById("style-text");
    element.classList.remove("atention")
}
