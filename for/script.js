alert('Neste exercício utilizaremos o for para construir um ocultador de nome.\nEle deve percorrer o nome de uma nave e substituir um aletra que o usuário desejar.');

let espaconave = prompt('Qual o nome da sua nave?')
let caracterEscolhido = prompt('Qual caracter deseja substituir?')
let caracterSubstituinte = prompt('Por qual caracter deseja fazer a substituição?')

let novaEspaconave = ''

for (let i = 0; i < espaconave.length; i++) {
    if(espaconave[i] == caracterEscolhido) {
        novaEspaconave += caracterSubstituinte
    } else {
        novaEspaconave += espaconave[i]
    }
}
alert(`O novo nome da sua nave é: ${novaEspaconave}`)