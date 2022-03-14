function tabular(){
    let num = document.getElementById('txtn')
    let tab = document.querySelector('select#seltab')

    if(num.value.length == 0){
        alert('por favor, digite um numero')
    }else{
        var n = Number(num.value)
        tab.innerHTML = ''
        var c = 1
        while(c <= 10){
            var iten = document.createElement('option')
            iten.text = `${n} x ${c} = ${n*c}`
            iten.value = `tab ${c}`
            tab.appendChild(iten)
            c++
        }
    }
}