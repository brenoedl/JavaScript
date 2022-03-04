function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade  = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            gênero = 'homen'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src' , 'homen-crianca.png')
            }else if(idade < 20){
                //joven
                img.setAttribute('src' , 'homen-joven.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src' , 'homen-cadulto.png')
            }else{
                //idoso
                img.setAttribute('src' , 'homen-idoso.png')
            }
        }else if(fsex[1].checked){
            gênero = 'mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src' , 'mulher-crrianca.png')
            }else if(idade < 20){
                //joven
                img.setAttribute('src' , 'mulher-joven.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src' , 'mulher-adulta.png')
            }else{
                //idoso
                img.setAttribute('src' , 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}