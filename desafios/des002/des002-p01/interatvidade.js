function contar(){
    let ini = document.getElementById('txt-i')
    let fim = document.getElementById('txt-f')
    let passo = document.getElementById('txt-p')
    let res = document.querySelector('div#res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        alert('[ERRO] faltam dados')
    }else{
        res.innerHTML = 'Contamdo: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        for(var c = i; c <= f; c +=)
    }
}