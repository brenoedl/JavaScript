function contar(){
    let ini = document.getElementById('txt-i')
    let fim = document.getElementById('txt-f')
    let passo = document.getElementById('txt-p')
    let res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = 'Inpossivel contar!'
    }else{
        res.innerHTML = 'Contamdo: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if(p <= 0){
            alert('Passo inválido considerando passo 1')
            p = 1
        }

        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f600}`
    }
}