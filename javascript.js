let saberResultado = document.getElementById('botao')
let limparResultado = document.getElementById('limparResultado')

// Executa a function quando clicado no botão saber resultado
saberResultado.addEventListener('click', () => {
    let notas = document.getElementById('nota').value
    if(notas >= 60 && notas <=100) {
        document.getElementById('resultado').innerText = 'Parabéns voçê foi aprovado!!!'
    } else if(notas >= 0 && notas < 60){
        document.getElementById('resultado').innerText = 'Infelizmente voçê foi reprovado :('
    } else if(notas == null || notas == undefined || notas == 'Digite sua nota') {
        document.getElementById('resultado').innerText = 'Digite uma nota'
    } else if(notas == '') {
        document.getElementById('resultado').innerText = 'Digite uma nota'
    } else {
        document.getElementById('resultado').innerText = 'Digite um valor entre 0 e 100!'
    }
})

// Executa a function quando clicado no botão limpar resultado
limparResultado.addEventListener('click', () => {
    document.getElementById('resultado').innerText = ''
})

// Limpa o valor do input quando clicado
let limparValorInput = document.getElementById('nota')

limparValorInput.addEventListener('click', () => {
    limparValorInput.value = ''
})





