function verificar() {
    var ano = window.document.getElementById('anoUser')
    var nAno = Number(ano.value)
    var sexo = window.document.getElementById('sexUser')
    var res = window.document.getElementById('res')
    var anoNasc = new Date()
    var idade = anoNasc.getFullYear()
    var idadeReal = idade - nAno
    
    res.innerHTML = `Detectamos ${nAno} com `

}