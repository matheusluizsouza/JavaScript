var agora = new Date()
var diasem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log(diasem)
switch (diasem) {
    case 0:
        console.log('Hoje é Domingo')
        
    case 1:
        console.log('Hoje é Segunda-feira')
        
    case 2:
        console.log('Hoje é Terça-feira')
        
    case 3:
        console.log('Hoje é Quarta-feira')
        
    case 4:
        console.log('Hoje é Quinta-feira')
        
    case 5:
        console.log('Hoje é Sexta-feira')
        
    case 6:
        console.log('Hoje é Sábado')
        
    default:
        console.log('[ERRO] Dia inválido')
         
}