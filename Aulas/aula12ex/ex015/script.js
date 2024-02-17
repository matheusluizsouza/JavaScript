function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crianca_masculino.png')
            } else if (idade > 10 && idade < 18) {
                //adolescente
                img.setAttribute('src', 'imagens/adolescente_masculino.png')
            } else if (idade >= 18 && idade < 50) {
                //jovem
                img.setAttribute('src', 'imagens/jovem_masculino.png')
            } else if (idade >= 50 && idade < 65) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_masculino.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_masculino.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/crianca_feminino.png')
            } else if (idade > 10 && idade < 18) {
                //adolescente
                img.setAttribute('src', 'imagens/adolescente_feminino.png')
            } else if (idade >= 18 && idade < 50) {
                //jovem
                img.setAttribute('src', 'imagens/jovem_feminino.png')
            } else if (idade >= 50 && idade < 65) {
                //adulto
                img.setAttribute('src', 'imagens/adulto_feminino.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso_feminino.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
    } 
}