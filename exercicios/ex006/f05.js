function fatoriaal(n){
    if(n == 1){
        return 1
    }else{
        return n* fatoriaal(n-1)
    }
}
console.log(fatoriaal(5))