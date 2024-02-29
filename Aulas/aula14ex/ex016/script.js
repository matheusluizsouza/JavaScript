function contar() {
    var start = document.getElementById('numIni')
    var end = document.getElementById('numFim')
    var pass = document.getElementById('numPass')
    var res = document.querySelector('div#res')

        if (start.value == '' || end.value == '') {
            res.innerHTML = 'Impossivel Contar!'
        } else if (pass.value == 0 || pass.value == '') {
            window.alert('Impossivel realizar a contagem com o valor de Passo igual a 0!')
        } else {
            res.innerHTML = 'Contando:...'
        }
}