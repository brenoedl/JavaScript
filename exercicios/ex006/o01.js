let amigo = {nome: 'Bruci',
 sexo: 'M' , 
idade: 20 , 
envelhecer(i=0){
    console.log('envelheceu')
    this.idade += i
}}

amigo.envelhecer(2)
console.log(`O ${amigo.nome} tem ${amigo.idade} anos.`)