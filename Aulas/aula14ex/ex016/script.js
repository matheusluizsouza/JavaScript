function contar() {
    let start = document.getElementById('numIni')
    let end = document.getElementById('numFim')
    let pass = document.getElementById('numPass')
    let res = document.querySelector('div#res')
    

    if (start.value.length == 0 || end.value.length == 0 || pass.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(pass.value)
        if (p <= 0) {
            window.alert('[ERRO] O valor do Passo não pode ser igual a zero! Por favor, preencha novamente.')
        }
        if (f > i) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` // Utilizar somente o = e ñ += será exibido apenas o resultado final da contagem e nao ela inteira
            }
        } else if (f < i) {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} ` 
            }
        }
        res.innerHTML += `\u{2705}` // Acrescenta o CHECK verde ao final de cada condiçao acima
    }
}