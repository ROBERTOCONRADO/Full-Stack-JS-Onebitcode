function showInfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likePrograming = document.querySelector("input[name='like-programing']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
    let optionsValue = []
    developerOptions.forEach(Element => {optionsValue.push(Element.value)})
    let optionsChecked = optionsValue.join(", ")
    alert(`Nome: ${name}\nCor Primária: ${favoriteColor}\nGosta de Programar? ${likePrograming}\nConhecimentos em Programação: ${optionsChecked}`)
}